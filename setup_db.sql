-- SQL Schema for Apex College Website
-- Works for both Local MySQL and Aiven MySQL (defaultdb)

CREATE TABLE IF NOT EXISTS contact_messages (
  id          INT           NOT NULL AUTO_INCREMENT,
  name        VARCHAR(255)  NOT NULL,
  email       VARCHAR(255)  NOT NULL,
  phone       VARCHAR(50)   DEFAULT NULL,
  subject     VARCHAR(255)  NOT NULL,
  message     TEXT          NOT NULL,
  created_at  TIMESTAMP     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB
  DEFAULT CHARSET=utf8mb4
  COLLATE=utf8mb4_unicode_ci;

DESCRIBE contact_messages;
