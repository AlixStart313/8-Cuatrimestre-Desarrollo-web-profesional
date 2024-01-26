
<template>
    <b-container>
        <b-row>
            <b-col>
                <h4>Datos de la persona</h4>
                <b-form-group label="Nombre:">
                    <b-form-input id="input-small" size="sm" placeholder="Juan..." v-model="Form.name"></b-form-input>
                    <b-form-invalid-feedback>
                        Este campo es obligatorio.
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="apellido paterno:">
                    <b-form-input id="input-small" size="sm" placeholder="Peréz..." v-model="Form.firstName"></b-form-input>
                    <b-form-invalid-feedback>
                        Este campo es obligatorio.
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Apellido materno:">
                    <b-form-input id="input-small" size="sm" placeholder="Lopez..." v-model="Form.lastName"></b-form-input>
                    <b-form-invalid-feedback>
                        Este campo es obligatorio.
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col>
                <h4>Datos de su domicilio</h4>
                <b-form-group label="Codigo postal:">
                    <b-form-input id="input-small" size="sm" placeholder="codigo postal" v-model="Form.cp"></b-form-input>
                    <b-form-invalid-feedback>
                        Este campo es obligatorio.
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Calle:">
                    <b-form-input id="input-small" size="sm" placeholder="Priv. la mina..." v-model="Form.street"></b-form-input>
                    <b-form-invalid-feedback>
                        Este campo es obligatorio.
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="numero:">
                    <b-form-input id="input-small" size="sm" placeholder="37..." v-model="Form.number"></b-form-input>
                    <b-form-invalid-feedback>
                        Este campo es obligatorio.
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="City:">
                    <b-form-input id="input-small" size="sm" placeholder="Ciudad" v-model="Form.city"></b-form-input>
                    <b-form-invalid-feedback>
                        Este campo es obligatorio.
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-group label="Fecha de cumpleaños:">
                    <b-form-input id="input-small" size="sm" v-model="Form.Bday"></b-form-input>
                    <b-form-invalid-feedback>
                        Este campo es obligatorio.
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="Email:">
                    <b-form-input id="input-small" size="sm" placeholder="Peréz@gmail.com..." v-model="Form.email"></b-form-input>
                    <b-form-invalid-feedback>
                        Este campo es obligatorio.
                    </b-form-invalid-feedback>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label="Numero de telefono:">
                    <b-form-input id="input-small" size="sm" placeholder="7771680188..." v-model="Form.phoneNumber"></b-form-input>
                    <b-form-invalid-feedback>
                        Este campo es obligatorio.
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group label="foto de la persona:">
                    <b-form-input id="input-small" size="sm" placeholder="" v-model="Form.firstName"></b-form-input>
                    <b-form-invalid-feedback>
                        Este campo es obligatorio.
                    </b-form-invalid-feedback>
                </b-form-group>
                <b-button @OnClic="getData()">Guardar</b-button>
            </b-col>
        </b-row>
    </b-container>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ModalNewHardSkill',
    data() {
        return {
            Form: {
                name: '',
                firstName: '',
                lastName: '',
                cp: '',
                street: '',
                number: '',
                city: '',
                Bday: '',
                email: '',
                phoneNumber: '',
                image: ''
            }
        }
    },

    methods: {
        getData() {
            console.log(this.Form)
        }

    }
});
</script>