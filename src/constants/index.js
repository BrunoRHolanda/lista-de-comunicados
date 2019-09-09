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

// Testing
export const DEBUG = true;

// Backend API endpoints
export const API_BASE_URL = 'http://localhost:84';

/**
 * Key for local storage.
 *
 * Set the key to use in local storage to hold persistant data. If logged in,
 * you can see this key by going to Chrome > dev tools > application tab,
 * then choosing "Local Storage" and "http://localhost:8080".
 *
 * @type {string}
 */
export const STORAGE_KEY = 'lista-comunicados';
