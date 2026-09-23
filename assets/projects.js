// Project data only. Add new projects at the top; the page renders them in this order.
// areas: one or more of "AI & LLMs", "Data pipelines", "Streaming", "Analytics".
window.PROJECTS = [
  {
    title: "Self-Correcting Legal RAG with LangGraph",
    year: 2026,
    isNew: true,
    areas: ["AI & LLMs"],
    description:
      "An agent over the U.S. v. Google antitrust court record (385 pages) that audits every answer for grounding and abstains instead of hallucinating. Rejected drafts go to a dead-letter queue; retries are provably bounded. Same container runs locally, on AWS or on Azure, with Terraform for both clouds validated in CI.",
    tags: ["LangGraph", "FastAPI", "pgvector", "OpenTelemetry", "Terraform", "AWS", "Azure", "Docker"],
    url: "https://github.com/rodrigo85/langgraph-legal-rag",
  },
  {
    title: "CDC Pipeline: PostgreSQL to S3 with DMS, Kinesis, Firehose and Lambda",
    year: 2024,
    areas: ["Streaming", "Data pipelines"],
    description:
      "End-to-end change data capture from PostgreSQL streamed to S3 through AWS DMS, Kinesis, Firehose and Lambda, with partitioned raw and processed outputs.",
    tags: ["AWS DMS", "Kinesis", "Firehose", "Lambda", "S3"],
    url: "https://github.com/rodrigo85/cdc_kinesis_ingestion",
  },
  {
    title: "dbt with Snowflake for the Mflix JSON dataset",
    year: 2024,
    areas: ["Data pipelines"],
    description:
      "dbt and Snowflake processing raw MongoDB Mflix JSON: automated stages, views and transformations into a structured staging layer.",
    tags: ["dbt", "Snowflake", "JSON"],
    url: "https://github.com/rodrigo85/snowflake_dbt",
  },
  {
    title: "Databricks and Delta Lake for inventory management",
    year: 2024,
    areas: ["Data pipelines"],
    description: "E-commerce order handling on Databricks with Delta tables: ingestion, upserts and inventory state.",
    tags: ["Databricks", "Delta Lake", "PySpark"],
    url: "https://github.com/rodrigo85/databricks_delta_table",
  },
  {
    title: "Salary data cleaning and wrangling with Pandas",
    year: 2024,
    areas: ["Analytics"],
    description:
      "Cleaning and analysis of salary data: missing values, outliers, currency conversion and industry categorisation with sentence embeddings.",
    tags: ["Pandas", "Jupyter", "Sentence Transformers", "scikit-learn"],
    url: "https://github.com/rodrigo85/python_pandas_data_wrangling",
  },
  {
    title: "Real-time stock order matching with Kafka",
    year: 2024,
    areas: ["Streaming"],
    description:
      "A stock order matching engine in Python: buy and sell orders flow through Kafka and trade history is persisted in Cassandra.",
    tags: ["Python", "Kafka", "Cassandra"],
    url: "https://github.com/rodrigo85/python_kafka_stock_trade",
  },
  {
    title: "Flight bookings analysis with PySpark",
    year: 2024,
    areas: ["Analytics"],
    description:
      "Routes, aircraft capacity and traffic patterns from airline booking data in Delta tables on S3: capacity rates, major routes and traffic distribution.",
    tags: ["PySpark", "Delta Lake", "Pandas", "Plotly", "SQL"],
    url: "https://github.com/rodrigo85/pyspark_data_analysis",
  },
  {
    title: "AWS Step Functions for multi-stage data processing",
    year: 2024,
    areas: ["Data pipelines"],
    description:
      "A Step Functions workflow coordinating Lambda, Glue, S3 and Athena across the stages of a data processing pipeline.",
    tags: ["Step Functions", "Lambda", "Glue", "Athena", "S3"],
    url: "https://github.com/rodrigo85/aws_step_functions",
  },
  {
    title: "AWS DMS ingestion orchestrated with Airflow",
    year: 2024,
    areas: ["Data pipelines"],
    description: "Apache Airflow orchestrating AWS Database Migration Service tasks to ingest data into Amazon S3.",
    tags: ["Airflow", "AWS DMS", "S3"],
    url: "https://github.com/rodrigo85/dms_ingestion",
  },
];
