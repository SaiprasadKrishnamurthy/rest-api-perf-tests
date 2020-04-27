import io.gatling.core.Predef._ // 2
import io.gatling.http.Predef._
import scala.concurrent.duration._

/**
    Simulates the load tests for a reactive API.
    @author Sai.
**/

class ReactiveApiSimulation extends Simulation { // 3

  val httpProtocol = http // 4
    .baseUrl("http://reactive-service:8081/api/v1/users") // 5
    .acceptHeader("application/json") // 6
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")

  val scn = scenario("PerfTestOfReactiveRestAPI") // 7
    .exec(http("GetUsers") // 8
      .get("/")) // 9
     // 10

  setUp( // 11
    scn.inject(
    constantConcurrentUsers(200) during (10 seconds), // 1
    rampConcurrentUsers(200) to (400) during (10 seconds) // 2
  )
  ).protocols(httpProtocol) // 13
}