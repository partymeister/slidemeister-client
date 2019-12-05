<template>
    <div id="app">
        <div class="server-error alert alert-danger d-none">
            {{error}}
        </div>
        <router-view/>
    </div>
</template>

<script>
    const axios = require('axios');
    import toast from "@/mixins/toast";

    export default {
        data() {
            return {
                error: false
            };
        },
        mixins: [
            toast
        ],
        mounted() {
            this.$eventHub.$on('server-configuration-update', () => {
                this.getConfigFromServer();
            });
            this.getConfigFromServer();
            this.$eventHub.$on('socket-unavailable', () => {
                this.error = 'Socket connection not available. Please check your configuration';
                document.querySelector('.server-error').classList.remove('d-none');
            });
            this.$eventHub.$on('socket-connected', () => {
                this.error = false;
                document.querySelector('.server-error').classList.add('d-none');
            });
        },
        methods: {
            getConfigFromServer() {
                let serverConfiguration = localStorage.getItem('serverConfiguration');
                if (serverConfiguration !== null && serverConfiguration !== undefined) {
                    serverConfiguration = JSON.parse(serverConfiguration);

                    if (serverConfiguration.server !== '' && serverConfiguration.client !== '') {
                        // Get data from partymeister server (jingles etc.)
                        axios.get(serverConfiguration.server + '/api/slide_clients/' + serverConfiguration.client).then(result => {
                            localStorage.setItem('slideClientConfiguration', JSON.stringify(result.data.data));
                            this.$eventHub.$emit('slide-client-loaded');
                            this.error = false;
                            document.querySelector('.server-error').classList.add('d-none');
                            this.toast('Slide client configuration loaded');
                            this.$eventHub.$emit('jingles-loaded', result.data.data.jingles);
                        }).catch(e => {
                            this.error = 'Problems getting slide client configuration from server. Please check your configuration. ('+e.message+')';
                            document.querySelector('.server-error').classList.remove('d-none');
                        });
                    } else {
                        this.error = 'No server is configured. Please check your configuration.';
                        document.querySelector('.server-error').classList.remove('d-none');
                    }
                }
            }
        }
    }
</script>
<style lang="scss">
    // Your variable overrides

    $blue: #20a8d8 !default;
    $indigo: #6610f2 !default;
    $purple: #6f42c1 !default;
    $pink: #e83e8c !default;
    $red: #f86c6b !default;
    $orange: #f8cb00 !default;
    $yellow: #ffc107 !default;
    $green: #4dbd74 !default;
    $teal: #20c997 !default;
    $cyan: #17a2b8 !default;

    @import '~bootstrap';
    @import "~animate.css";
    @import "~toastr/toastr";

    .server-error {
        margin-bottom: 0;
        text-align: center;
        z-index: 40000;
    }
</style>
