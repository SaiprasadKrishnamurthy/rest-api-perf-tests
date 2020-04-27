package org.sai.app

import org.apache.http.impl.client.HttpClientBuilder
import org.apache.http.impl.client.LaxRedirectStrategy
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory
import org.springframework.http.client.SimpleClientHttpRequestFactory
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.client.RestTemplate
import java.io.IOException
import java.net.HttpURLConnection


@RestController
@RequestMapping("/api/v1")
class NonReactiveRestApi {

    val factory = HttpComponentsClientHttpRequestFactory()

    val httpClient = HttpClientBuilder.create()
            .setRedirectStrategy(LaxRedirectStrategy())
            .build()

    val restTemplate = RestTemplate(object : SimpleClientHttpRequestFactory() {
        @Throws(IOException::class)
        override fun prepareConnection(connection: HttpURLConnection, httpMethod: String) {
            super.prepareConnection(connection, httpMethod)
            connection.instanceFollowRedirects = true
        }
    })

    init {
        factory.httpClient = httpClient
        restTemplate.requestFactory = factory;
    }

    @GetMapping("/users")
    fun getUsers() =
            restTemplate.getForObject("http://slowwly.robertomurray.co.uk/delay/1000/url/https://reqres.in/api/users?page=2", String::class.java)


}