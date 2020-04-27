package org.sai.app

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class NonReactiveServiceApplication

fun main(args: Array<String>) {
	runApplication<NonReactiveServiceApplication>(*args)
}
