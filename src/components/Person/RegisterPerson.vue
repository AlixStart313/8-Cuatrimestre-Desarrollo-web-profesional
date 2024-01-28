
<template>
    <div>
        <h3>Registro de personas</h3>
        <b-form class="mt-4 mx-3" id="app" @submit="checkForm">
            <b-row>
                <b-col cols="12" sm="12" md="12" lg="5" xl="5">
                    <h4>Datos de la persona</h4>
                    <b-form-group label="Nombre:">
                        <b-form-input id="input-small" size="sm" placeholder="Juan..." v-model="Form.name"></b-form-input>
                    </b-form-group>
                    <b-form-group label="apellido paterno:">
                        <b-form-input id="input-small" size="sm" placeholder="Peréz..."
                            v-model="Form.firstName"></b-form-input>

                    </b-form-group>
                    <b-form-group label="Apellido materno:">
                        <b-form-input id="input-small" size="sm" placeholder="Lopez..."
                            v-model="Form.lastName"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Fecha de Nacimiento:">
                        <b-form-datepicker id="example-datepicker" size="sm" v-model="Form.Bday"
                            class="mb-2"></b-form-datepicker>
                    </b-form-group>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="5" xl="5" class="">
                    <h4>Datos de su domicilio</h4>
                    <b-form-group label="Codigo postal:">
                        <b-form-input type="number" id="input-small" size="sm" placeholder="codigo postal"
                            v-model="Form.cp"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Calle:">
                        <b-form-input id="input-small" size="sm" placeholder="Priv. la mina..."
                            v-model="Form.street"></b-form-input>
                    </b-form-group>
                    <b-form-group label="numero:">
                        <b-form-input type="number" id="input-small" size="sm" placeholder="37..."
                            v-model="Form.number"></b-form-input>
                    </b-form-group>
                    <b-form-group label="City:">
                        <b-form-input id="input-small" size="sm" placeholder="Ciudad" v-model="Form.city"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <h4 class="mt-4">Datos de contacto</h4>
                <b-col cols="12" sm="12" md="12" lg="5" xl="5" class="">
                    <b-form-group label="Email:">
                        <b-form-input id="input-small" size="sm" placeholder="Peréz@gmail.com..."
                            v-model="Form.email"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Numero de telefono:">
                        <b-form-input type="number" id="input-small" size="sm" placeholder="7771680188..."
                            v-model="Form.phoneNumber"></b-form-input>
                    </b-form-group>
                    <b-form-group label="Fotografia de la persona">
                        <b-form-file v-model="Form.image" placeholder="Choose a file or drop it here..."
                        drop-placeholder="Drop file here..."></b-form-file>
                    </b-form-group>
                </b-col>
                <b-col cols="12" sm="12" md="12" lg="5" xl="5" class="">
                    <b-button variant="primary" type="submit">Guardar</b-button>
                    <p v-if="errors.length">
                        <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                    <ul>
                        <li class="text-danger" v-for="error in errors">{{ error }}</li>
                    </ul>
                    </p>
                    <p class="text-success" v-else>
                        Formulario lleno de manera correcta
                    </p>
                </b-col>
            </b-row>

        </b-form>
    </div>
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
            },
            errors: [],
        }
    },

    methods: {
        checkForm: function (e) {
            console.log(e);
            if (this.Form.name &&
                this.Form.firstName &&
                this.Form.cp &&
                this.Form.street &&
                this.Form.number &&
                this.Form.city &&
                this.Form.Bday &&
                this.Form.email &&
                this.Form.phoneNumber &&
                this.Form.image) {
                return true;
            }
            this.errors = [];

            if (!this.Form.name) {
                this.errors.push('El nombre es obligatorio.');
            }
            if (!this.Form.firstName) {
                this.errors.push('El Primer apellido es obligatorio.');
            }
            if (!this.Form.cp) {
                this.errors.push('El codigo postal es obligatorio')
            }
            if (!this.Form.street) {
                this.errors.push('La calle es obligatoria')
            }
            if (!this.Form.number) {
                this.errors.push('El numero es obligatorio')
            }
            if (!this.Form.city) {
                this.errors.push('La ciudaad es obligatorio')
            }
            if (this.Form.Bday) {
                const birthDate = new Date(this.Form.Bday);
                const currentDate = new Date();
                const eighteenYearsAgo = new Date();
                eighteenYearsAgo.setFullYear(currentDate.getFullYear() - 18);

                if (birthDate >= currentDate || birthDate > eighteenYearsAgo) {
                    this.errors.push('La fecha de nacimiento debe ser anterior a la fecha actual y el límite de edad es 18 años.');
                }
            } else {
                this.errors.push('La fecha de nacimiento es obligatoria.');
            }
            if (!this.Form.email) {
                this.errors.push('El email es obligatorio')
            }
            if (!this.isValidEmail(this.Form.email)) {
                this.errors.push('El formato del correo electrónico no es válido.');
            }
            if (!this.Form.phoneNumber) {
                this.errors.push('El numero de telefono es obligatorio')
            }
            if (!this.isValidPhoneNumberLength(this.Form.phoneNumber)) {
                this.errors.push('El número de teléfono solo permite 10 caracteres.');
            }
            if (!this.Form.Image) {
                this.errors.push('La imagen es obligatoria')
            }
            if (this.Form.image && this.Form.image.size > 3 * 1024 * 1024) {
                this.errors.push('El tamaño del archivo de la fotografía debe ser menor a 3 MB.');
            }
            e.preventDefault()
        },
        isValidEmail: function (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },
        isValidPhoneNumberLength: function (phoneNumber) {
            return phoneNumber.length >= 9;
        },
    }

}
);
</script>