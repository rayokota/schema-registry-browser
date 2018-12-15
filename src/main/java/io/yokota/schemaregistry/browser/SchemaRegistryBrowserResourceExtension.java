/*
 * Copyright 2019 Confluent Inc.
 */

package io.yokota.schemaregistry.browser;

import io.confluent.kafka.schemaregistry.exceptions.SchemaRegistryException;
import io.confluent.kafka.schemaregistry.rest.SchemaRegistryConfig;
import io.confluent.kafka.schemaregistry.rest.extensions.SchemaRegistryResourceExtension;
import io.confluent.kafka.schemaregistry.storage.SchemaRegistry;
import org.glassfish.jersey.servlet.ServletProperties;

import javax.ws.rs.core.Configurable;

public class SchemaRegistryBrowserResourceExtension
    implements SchemaRegistryResourceExtension {

    @Override
    public void register(
        Configurable<?> configurable,
        SchemaRegistryConfig schemaRegistryConfig,
        SchemaRegistry kafkaSchemaRegistry
    ) throws SchemaRegistryException {
        configurable.property(ServletProperties.FILTER_STATIC_CONTENT_REGEX,
            "/(static/.*|.*\\.html|.*\\.js)");
    }

    @Override
    public void close() {
    }
}
