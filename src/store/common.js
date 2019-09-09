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

// Common State.
const defaults = {
    title: '',
    layout: 'DefaultLayout',
    error: {
        code: null,
        level: null,
        message: ''
    }
};

// Global module loaded on first app load.
export default {
    namespaced: true,

    state: Object.assign({}, defaults),

    mutations: {
        updateTitle (state, title) {
            state.title = title;
        },

        updateLayout (state, layout) {
            state.layout = layout;
        },

        error (state, options) {
            state.error = Object.assign({}, defaults.error, options);
        },

        clear (state) {
            state = Object.assign({}, defaults);
        }
    },

    actions: {
        updateTitle ({ commit }, title) {
            commit('updateTitle', title);
        },

        updateLayout ({ commit }, layout) {
            commit('updateLayout', layout);
        },
    }
};
