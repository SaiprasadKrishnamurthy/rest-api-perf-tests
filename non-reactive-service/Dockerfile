FROM openjdk:11-jdk
VOLUME /tmp
ARG JAR_FILE
COPY ${JAR_FILE} app.jar
RUN mkdir -p /sita/config/services/identityAnalytics
VOLUME /sita/config/services/identityAnalytics
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["/bin/sh"]
