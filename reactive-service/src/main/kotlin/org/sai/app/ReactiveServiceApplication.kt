package org.sai.app

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.kotlin.coroutine.EnableCoroutine

@SpringBootApplication
@EnableCoroutine
class ReactiveServiceApplication

fun main(args: Array<String>) {
	runApplication<ReactiveServiceApplication>(*args)
}
