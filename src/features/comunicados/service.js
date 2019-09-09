/**
    Copyright 2019 Bruno R. Holanda

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

import Vue from 'vue';
import * as constants from '@/constants';

class ComunicadosService {
    static index (callback) {
        Vue.http.get(`${constants.API_BASE_URL}/comunicados`)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

    static update (comunicado, callback) {
        Vue.http.put(`${constants.API_BASE_URL}/comunicados/${comunicado.id}`, comunicado)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }

}

class TipoComunicadosService {
    static index (callback) {
        Vue.http.get(`${constants.API_BASE_URL}/tiposComunicados`)
            .then(response => callback(response, null))
            .catch(error => callback(null, error));
    }
}

class StaticFiles {
    static download (url) {
        Vue.http({
            method: 'get',
            url: url,
            responseType: 'arraybuffer'
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([ response.data ]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', url); //or any other extension
            document.body.appendChild(link);
            link.click();
        });
    }
}

export { ComunicadosService, TipoComunicadosService, StaticFiles };
