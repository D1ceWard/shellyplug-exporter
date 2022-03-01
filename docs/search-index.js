crystal_doc_search_index_callback({"repository_name":"shellyplug-exporter","body":"# shellyplug-exporter (v1.1.1)\n![GitHub Workflow Status (main)](https://github.com/D1ceWard/shellyplug-exporter/actions/workflows/main.yml/badge.svg?branch=master)\n[![Docker Pulls](https://img.shields.io/docker/pulls/d1ceward/shellyplug-exporter.svg)](https://hub.docker.com/r/d1ceward/shellyplug-exporter)\n[![GitHub issues](https://img.shields.io/github/issues/D1ceWard/shellyplug-exporter)](https://github.com/D1ceWard/shellyplug-exporter/issues)\n[![GitHub license](https://img.shields.io/github/license/D1ceWard/shellyplug-exporter)](https://github.com/D1ceWard/shellyplug-exporter/blob/master/LICENSE)\n\nPrometheus exporter for Shelly plugs model S written in Crystal.\n> **Note** It uses the api provided by the plug, it does not use the MQTT protocol\n\n:rocket: Suggestions for new improvements are welcome in the issue tracker.\n\n## Installation and Usage\n\nThe `SHELLYPLUG_HOST` environment variable is required to retrieve information from the plug, `SHELLYPLUG_PORT` is optional (default 80).\nAuthentication variables `SHELLYPLUG_AUTH_USERNAME` and `SHELLYPLUG_AUTH_PASSWORD` depend on whether http authentication is enabled on the plug.\n\nThe `shellyplug-exporter` listens on HTTP port 5000 by default. See the environment variable `EXPORTER_PORT` to change this behavior.\n\n### Docker\n\nWith `docker run` command :\n```shell\ndocker run -d \\\n  -p 8080:5000 \\\n  -e SHELLYPLUG_HOST=\"shelly-plug-hostname-or-ip\" \\\n  -e SHELLYPLUG_PORT=\"80\" \\\n  -e SHELLYPLUG_AUTH_USERNAME=\"username-for-http-auth\" \\\n  -e SHELLYPLUG_AUTH_PASSWORD=\"password-for-http-auth\" \\\n  -e EXPORTER_PORT=5000 \\\n  d1ceward/shellyplug-exporter:latest\n```\n\nWith docker-compose file :\n```yaml\n---\nversion: \"3\"\n\nservices:\n  plug_exporter:\n    image: d1ceward/shellyplug-exporter:latest\n    restart: unless-stopped\n    ports:\n      - \"8080:5000\"\n    environment:\n      - SHELLYPLUG_HOST=\"shelly-plug-hostname-or-ip\"\n      - SHELLYPLUG_PORT=80\n      - SHELLYPLUG_AUTH_USERNAME=\"username-for-http-auth\"\n      - SHELLYPLUG_AUTH_PASSWORD=\"password-for-http-auth\"\n      - EXPORTER_PORT=5000\n```\n\nDocumentation available here : https://d1ceward.github.io/shellyplug-exporter/\n\n## Metrics\n\nBase path: `/metrics`\n\nName                   | Description                          | Type    |\n-----------------------|--------------------------------------|---------|\nshellyplug_power       | Current power drawn in watts         | Gauge   |\nshellyplug_overpower   | Overpower drawn in watts/minute      | Gauge   |\nshellyplug_total_power | Total power consumed in watts/minute | Counter |\nshellyplug_temperature | Plug temperature in celsius          | Gauge   |\nshellyplug_uptime      | Plug uptime in seconds               | Gauge   |\n\n## Contributing\n\nBug reports and pull requests are welcome on GitHub at https://github.com/D1ceWard/shellyplug-exporter. By contributing you agree to abide by the Code of Merit.\n\n1. Fork it (<https://github.com/D1ceWard/shellyplug-exporter/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Development building and running\n\n1. Install corresponding version of Crystal lang (cf: `.crystal-version` file)\n2. Install Crystal dependencies with `shards install`\n3. Build with `shards build`\n\nThe newly created binary should be at `bin/shelly_exporter`\n\n### Running tests\n\n```shell\ncrystal spec\n```\n\n## Contributors\n\n- [D1ceWard](https://github.com/D1ceWard) - creator and maintainer\n","program":{"html_id":"shellyplug-exporter/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"shellyplug-exporter","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"shellyplug-exporter/ShellyplugExporter","path":"ShellyplugExporter.html","kind":"module","full_name":"ShellyplugExporter","name":"ShellyplugExporter","abstract":false,"locations":[{"filename":"src/shellyplug_exporter/config.cr","line_number":1,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L1"},{"filename":"src/shellyplug_exporter/plug.cr","line_number":1,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/plug.cr#L1"},{"filename":"src/shellyplug_exporter/server.cr","line_number":1,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/server.cr#L1"},{"filename":"src/version.cr","line_number":1,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/version.cr#L1"}],"repository_name":"shellyplug-exporter","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"1.1.1\""}],"types":[{"html_id":"shellyplug-exporter/ShellyplugExporter/Config","path":"ShellyplugExporter/Config.html","kind":"class","full_name":"ShellyplugExporter::Config","name":"Config","abstract":false,"superclass":{"html_id":"shellyplug-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"shellyplug-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"shellyplug-exporter/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/shellyplug_exporter/config.cr","line_number":2,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L2"}],"repository_name":"shellyplug-exporter","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"shellyplug-exporter/ShellyplugExporter","kind":"module","full_name":"ShellyplugExporter","name":"ShellyplugExporter"},"constructors":[{"html_id":"new-class-method","name":"new","abstract":false,"location":{"filename":"src/shellyplug_exporter/config.cr","line_number":9,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L9"},"def":{"name":"new","visibility":"Public","body":"_ = allocate\n_.initialize\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"exporter_port:Int32-instance-method","name":"exporter_port","abstract":false,"location":{"filename":"src/shellyplug_exporter/config.cr","line_number":3,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L3"},"def":{"name":"exporter_port","return_type":"Int32","visibility":"Public","body":"@exporter_port"}},{"html_id":"exporter_port=(exporter_port:Int32)-instance-method","name":"exporter_port=","abstract":false,"args":[{"name":"exporter_port","external_name":"exporter_port","restriction":"Int32"}],"args_string":"(exporter_port : Int32)","args_html":"(exporter_port : Int32)","location":{"filename":"src/shellyplug_exporter/config.cr","line_number":3,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L3"},"def":{"name":"exporter_port=","args":[{"name":"exporter_port","external_name":"exporter_port","restriction":"Int32"}],"visibility":"Public","body":"@exporter_port = exporter_port"}},{"html_id":"plug_auth_password:String?-instance-method","name":"plug_auth_password","abstract":false,"location":{"filename":"src/shellyplug_exporter/config.cr","line_number":7,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L7"},"def":{"name":"plug_auth_password","return_type":"String | ::Nil","visibility":"Public","body":"@plug_auth_password"}},{"html_id":"plug_auth_password=(plug_auth_password:String?)-instance-method","name":"plug_auth_password=","abstract":false,"args":[{"name":"plug_auth_password","external_name":"plug_auth_password","restriction":"String | ::Nil"}],"args_string":"(plug_auth_password : String?)","args_html":"(plug_auth_password : String?)","location":{"filename":"src/shellyplug_exporter/config.cr","line_number":7,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L7"},"def":{"name":"plug_auth_password=","args":[{"name":"plug_auth_password","external_name":"plug_auth_password","restriction":"String | ::Nil"}],"visibility":"Public","body":"@plug_auth_password = plug_auth_password"}},{"html_id":"plug_auth_username:String?-instance-method","name":"plug_auth_username","abstract":false,"location":{"filename":"src/shellyplug_exporter/config.cr","line_number":6,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L6"},"def":{"name":"plug_auth_username","return_type":"String | ::Nil","visibility":"Public","body":"@plug_auth_username"}},{"html_id":"plug_auth_username=(plug_auth_username:String?)-instance-method","name":"plug_auth_username=","abstract":false,"args":[{"name":"plug_auth_username","external_name":"plug_auth_username","restriction":"String | ::Nil"}],"args_string":"(plug_auth_username : String?)","args_html":"(plug_auth_username : String?)","location":{"filename":"src/shellyplug_exporter/config.cr","line_number":6,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L6"},"def":{"name":"plug_auth_username=","args":[{"name":"plug_auth_username","external_name":"plug_auth_username","restriction":"String | ::Nil"}],"visibility":"Public","body":"@plug_auth_username = plug_auth_username"}},{"html_id":"plug_host:String-instance-method","name":"plug_host","abstract":false,"location":{"filename":"src/shellyplug_exporter/config.cr","line_number":4,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L4"},"def":{"name":"plug_host","return_type":"String","visibility":"Public","body":"@plug_host"}},{"html_id":"plug_host=(plug_host:String)-instance-method","name":"plug_host=","abstract":false,"args":[{"name":"plug_host","external_name":"plug_host","restriction":"String"}],"args_string":"(plug_host : String)","args_html":"(plug_host : String)","location":{"filename":"src/shellyplug_exporter/config.cr","line_number":4,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L4"},"def":{"name":"plug_host=","args":[{"name":"plug_host","external_name":"plug_host","restriction":"String"}],"visibility":"Public","body":"@plug_host = plug_host"}},{"html_id":"plug_port:Int32-instance-method","name":"plug_port","abstract":false,"location":{"filename":"src/shellyplug_exporter/config.cr","line_number":5,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L5"},"def":{"name":"plug_port","return_type":"Int32","visibility":"Public","body":"@plug_port"}},{"html_id":"plug_port=(plug_port:Int32)-instance-method","name":"plug_port=","abstract":false,"args":[{"name":"plug_port","external_name":"plug_port","restriction":"Int32"}],"args_string":"(plug_port : Int32)","args_html":"(plug_port : Int32)","location":{"filename":"src/shellyplug_exporter/config.cr","line_number":5,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/config.cr#L5"},"def":{"name":"plug_port=","args":[{"name":"plug_port","external_name":"plug_port","restriction":"Int32"}],"visibility":"Public","body":"@plug_port = plug_port"}}]},{"html_id":"shellyplug-exporter/ShellyplugExporter/Plug","path":"ShellyplugExporter/Plug.html","kind":"class","full_name":"ShellyplugExporter::Plug","name":"Plug","abstract":false,"superclass":{"html_id":"shellyplug-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"shellyplug-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"shellyplug-exporter/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/shellyplug_exporter/plug.cr","line_number":2,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/plug.cr#L2"}],"repository_name":"shellyplug-exporter","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"API_ENDPOINT","name":"API_ENDPOINT","value":"\"/status\""}],"namespace":{"html_id":"shellyplug-exporter/ShellyplugExporter","kind":"module","full_name":"ShellyplugExporter","name":"ShellyplugExporter"},"constructors":[{"html_id":"new(config:Config)-class-method","name":"new","abstract":false,"args":[{"name":"config","external_name":"config","restriction":"Config"}],"args_string":"(config : Config)","args_html":"(config : <a href=\"../ShellyplugExporter/Config.html\">Config</a>)","location":{"filename":"src/shellyplug_exporter/plug.cr","line_number":5,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/plug.cr#L5"},"def":{"name":"new","args":[{"name":"config","external_name":"config","restriction":"Config"}],"visibility":"Public","body":"_ = allocate\n_.initialize(config)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"query_data:Hash(Symbol,Float64|Int64)-instance-method","name":"query_data","abstract":false,"location":{"filename":"src/shellyplug_exporter/plug.cr","line_number":7,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/plug.cr#L7"},"def":{"name":"query_data","return_type":"Hash(Symbol, Float64 | Int64)","visibility":"Public","body":"response = execute_request\ndata = parse_response(response)\nmeter = data[\"meters\"]?.try(&.[](0))\n{:power => meter.try(&.[]?(\"power\")).try(&.as_f?) || 0_f64, :overpower => meter.try(&.[]?(\"overpower\")).try(&.as_f?) || 0_f64, :total => meter.try(&.[]?(\"total\")).try(&.as_i64?) || 0_i64, :temperature => data[\"temperature\"]?.try(&.as_f?) || 0_f64, :uptime => data[\"uptime\"]?.try(&.as_i64?) || 0_i64}\n"}}]},{"html_id":"shellyplug-exporter/ShellyplugExporter/Server","path":"ShellyplugExporter/Server.html","kind":"class","full_name":"ShellyplugExporter::Server","name":"Server","abstract":false,"superclass":{"html_id":"shellyplug-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"shellyplug-exporter/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"shellyplug-exporter/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/shellyplug_exporter/server.cr","line_number":3,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/server.cr#L3"}],"repository_name":"shellyplug-exporter","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"shellyplug-exporter/ShellyplugExporter","kind":"module","full_name":"ShellyplugExporter","name":"ShellyplugExporter"},"doc":"HTTP server formatting and returning metrics","summary":"<p>HTTP server formatting and returning metrics</p>","constructors":[{"html_id":"new(config:Config)-class-method","name":"new","abstract":false,"args":[{"name":"config","external_name":"config","restriction":"Config"}],"args_string":"(config : Config)","args_html":"(config : <a href=\"../ShellyplugExporter/Config.html\">Config</a>)","location":{"filename":"src/shellyplug_exporter/server.cr","line_number":4,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/server.cr#L4"},"def":{"name":"new","args":[{"name":"config","external_name":"config","restriction":"Config"}],"visibility":"Public","body":"_ = allocate\n_.initialize(config)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"run-instance-method","name":"run","doc":"Start a server for prometheus to retrieve metrics","summary":"<p>Start a server for prometheus to retrieve metrics</p>","abstract":false,"location":{"filename":"src/shellyplug_exporter/server.cr","line_number":9,"url":"https://github.com/D1ceWard/shellyplug-exporter/blob/22212751d9c08bc1f3cdbdb081e1e8cffd69d77e/src/shellyplug_exporter/server.cr#L9"},"def":{"name":"run","visibility":"Public","body":"initialize_server_config\nget(\"/metrics\") do\n  build_prometheus_response(@plug_instance.query_data)\nend\nLog.info do\n  \"Metrics server listening on port #{@config.exporter_port}.\"\nend\nKemal.run\n"}}]}]}]}})