<template>
  <div>
    <p>Categorias</p>
    <VBtn
      v-for="tipoComunicado in tiposComunicados"
      :key="tipoComunicado.name"
      class="d-inline ma-2 btn-outline"
      outlined
      color="black"
    >
      {{ tipoComunicado.name }}
    </VBtn>
    <VCard class="list-comunicado">
      <VList>
        <VListItem
          v-for="(item, key) in items"
          :key="item.title"
          :class="isSeen(item.seen)"
          class="ma-5 item-comunicado"
          @click="markSeen(key)"
        >
          <div :class="colorComunicado[item.type]" />
          <VListItemContent>
            <VListItemTitle class="d-flex mb-2">
              <div class="d-inline comunicado-title-1">
                {{ item.title }}
              </div>
              <div class="flex-grow-1" />
              <div class="d-inline comunicado-title-2">
                1556
              </div>
            </VListItemTitle>
            <VBtn
              v-for="file in item.files"
              :key="file.url"
              class="btn-file justify-space-between"
              outlined
              color="black"
              @click.stop.prevent="fileDownload(file.url)"
            >
              <VIcon>
                {{ icons[extractFileExtenssion(file.url)] }}
              </VIcon>
              {{ extractFileName(file.url) }}
              <VIcon>mdi-cloud-download-outline</VIcon>
            </VBtn>
            <VListItemSubtitle class="d-flex">
              <div class="d-inline comunicado-subtitle-1">
                {{ tiposComunicados[item.type].name }}
              </div>
              <div class="flex-grow-1" />
              <div class="d-inline comunicado-subtitle-2">
                {{ dateFormat(item.date) }}
              </div>
            </VListItemSubtitle>
          </VListItemContent>
        </VListItem>
      </VList>
    </VCard>
  </div>
</template>

<script>
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

import { ComunicadosService, StaticFiles, TipoComunicadosService } from './service';

export default {
    name: 'Comunicados',
    data () {
        return {
            selected: [ 2 ],
            icons:  {
                'pdf': 'mdi-file-pdf-outline',
                'png': 'mdi-file-image-outline',
            },
            colorComunicado: [
                'category-informativo_sum',
                'category-forca_de_venda',
                'category-vivo_ligado',
                'category-turbine_suas_vendas',
            ],
            tiposComunicados: [],
            items: [],
        };
    },
    created () {
        ComunicadosService.index((response, error) => {
            if (error) {throw error;}

            this.items = response.data;
        });

        TipoComunicadosService.index((response, error) => {
            if (error) {throw error;}

            this.tiposComunicados = response.data;
        });
    },
    methods: {
        markSeen (key) {
            this.items[key].seen = true;

            ComunicadosService.update(this.items[key], (response, error) => {
                if (error) {throw error;}

                console.log(response.data);
            });
        },

        fileDownload (url) {
            StaticFiles.download(url);
        },

        dateFormat (date) {
            const dateTimeArr = date.split(' ');
            const dateArr = dateTimeArr[0].split('-');

            return dateArr[2] + '/' + dateArr[1] + '/' + dateArr[0] + ' - ' + dateTimeArr[1];
        },

        extractFileExtenssion (url) {
            console.log((url.split('.'))[1]);
            return (url.split('.'))[1];
        },

        extractFileName (url) {
            const params = url.split('/');

            return params[params.length - 1];
        },

        isSeen (value) {
            return value? 'seen' : '';
        }
    },
};
</script>

<style lang="scss">
  .comunicado-title-1 {
    @include  formatText(13px, bold, 18px);
    text-transform: capitalize !important;
  }

  .comunicado-title-2 {
    @include  formatText(13px, bold, 19px);
    text-transform: uppercase;
  }

  .comunicado-subtitle-1 {
    @include formatText(11px, normal, 15px);
  }

  .comunicado-subtitle-2 {
    @include formatText(10px, normal, 15px);
    color: #828282;
  }

  .btn-outline {
    @include formatText(12px, normal, 16px);
    text-transform: capitalize;
    border: 0.5px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 6px;
  }

  .category-forca_de_venda {
    @include categoryColor($comunicado-forca_de_venda)
  }

  .category-informativo_sum {
    @include categoryColor($comunicado-informativo_sum)
  }

  .category-vivo_ligado {
    @include categoryColor($comunicado-vivo_ligado)
  }

  .category-turbine_suas_vendas {
    @include categoryColor($comunicado-turbine_suas_vendas)
  }

  .item-comunicado {
    background: #FFFFFF !important;
    box-shadow: 0px 3px 8px rgba(51, 51, 51, 0.1) !important;
    border-radius: 5px !important;
  }

  .list-comunicado {
    box-shadow: none;
  }

  .btn-file {
    width: 284px;
    height: 46px;
    border: 1px solid #E3E3E3;
    box-sizing: border-box;
    border-radius: 5px;
    text-transform: lowercase;
  }

  .seen {
    background: #EBEBEB !important;
  }
</style>
