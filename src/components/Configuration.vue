<template>
    <div class="container configuration">
        <div class="row pb-3">
            <div class="col-md-12 mt-3">
                <h3 class="mb-4">Configuration</h3>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="server">Partymeister server</label>
                            <input type="text" v-model="configuration.server" class="form-control" id="server"
                                   placeholder="https://partymeister.org">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="client">Partymeister slide client id</label>
                            <input type="text" v-model="configuration.client" class="form-control" id="client"
                                   placeholder="1">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="host">Websocket host</label>
                            <input type="text" v-model="configuration.host" class="form-control" id="host"
                                   placeholder="https://partymeister.org">
                        </div>
                        <div class="form-group">
                            <label for="path">Websocket path</label>
                            <input type="text" v-model="configuration.path" class="form-control" id="path"
                                   placeholder="/socket">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="port">Websocket port</label>
                            <input type="text" v-model="configuration.port" class="form-control" id="port" placeholder="">
                        </div>
                        <div class="form-group">
                            <label for="key">Websocket server key</label>
                            <input type="text" v-model="configuration.key" class="form-control" id="key" placeholder="12345">
                        </div>
                    </div>
                </div>
                <button @click="saveConfiguration" type="submit" class="btn btn-block btn-primary">Save configuration
                </button>
                <button @click="backToViewer" type="submit" class="btn btn-block btn-secondary">Back to the viewer
                </button>
            </div>
        </div>
    </div>
</template>

<script>

    import toast from "@/mixins/toast";

    export default {
        name: 'configuration',
        components: {},
        mixins: [toast],
        data: function () {
            return {
                configuration: {
                    server: 'https://pm.demoparty.be',
                    client: 1,
                    host: 'pm.demoparty.be',
                    path: '/socket',
                    port: null,
                    key: '12345'
                }
            };
        },
        mounted() {
            let serverConfiguration = localStorage.getItem('serverConfiguration');
            if (serverConfiguration !== null) {
                serverConfiguration = JSON.parse(serverConfiguration);
                this.configuration = serverConfiguration;
            }
        },
        methods: {
            backToViewer() {
                this.$eventHub.$emit('show-viewer');
            },
            saveConfiguration() {
                localStorage.setItem('serverConfiguration', JSON.stringify(this.configuration));
                this.toast('Configuration saved');
                this.$eventHub.$emit('server-configuration-update');
            }
        },
        beforeDestroy() {
            this.$eventHub.$off();
        },
    }
</script>
<style lang="scss">
    .container.configuration {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        top: 0;
        z-index: 50000;
        background: white;
        cursor: initial !important;
        -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.62);
        -moz-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.62);
        box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.62);    }
</style>
