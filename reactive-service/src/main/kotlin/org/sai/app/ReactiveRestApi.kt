package org.sai.app

import org.springframework.http.client.reactive.ReactorClientHttpConnector
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.awaitBody
import org.springframework.web.reactive.function.client.awaitExchange
import reactor.netty.http.client.HttpClient

/**
 * A simple rest api to simulate a delayed external web api call to get users.
 * Much like a 3rd party REST API call in a non-blocking way.
 * @author Sai.
 */
@RestController
@RequestMapping("/api/v1")
class ReactiveRestApi {

    private val webClient = WebClient.builder()
            .baseUrl("http://slowwly.robertomurray.co.uk/delay/1000/url/https://reqres.in/api/users?page=2")
            .clientConnector(ReactorClientHttpConnector(HttpClient.create().followRedirect(true)))
            .build()

    @GetMapping("/users")
    suspend fun getUsers() =
            webClient.get()
                    .awaitExchange()
                    .awaitBody<String>()
}