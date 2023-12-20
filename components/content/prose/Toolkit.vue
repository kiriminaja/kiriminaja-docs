<template>
  <div class="grid xl:grid-cols-5 gap-4">
    <div class="xl:col-span-2 grid gap-2">
      <div>
        <label for="courier" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ekspedisi</label>
        <select id="courier"
                class="bg-transparent border border-outlineVariant text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                v-model="params.selected_courier"
        >
          <option v-for="exp in options" :key="`cou-${exp.label}`" :value="exp.label" v-text="exp.label"></option>
        </select>
      </div>
      <div>
        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nilai Barang</label>
        <input id="price" type="number" v-model="params.item_price" placeholder="Nilai Barang"
               class="bg-transparent border border-outlineVariant text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
        >
      </div>
      <div>
        <label for="ongkir" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ongkos Kirim</label>
        <input id="ongkir" type="number" v-model="params.shipping_cost" placeholder="Ongkos Kirim"
               class="bg-transparent border border-outlineVariant text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
        >
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input id="insurance" v-model="params.use_insurance" type="checkbox" value="true"
                 class="w-4 h-4 border text-primary bg-background border-outlineVariant rounded focus:ring-3 focus:ring-primary dark:ring-offset-primary"
                 required
          >
        </div>
        <label for="insurance" class="ms-2 text-sm font-medium">Gunakan
          Asuransi</label>
      </div>
    </div>
    <div class="xl:col-span-3">
      <div class="w-full m-0">
        <table class="max-w-none m-0">
          <tbody>
          <tr>
            <td>Nilai Barang</td>
            <td class="text-right" v-text="formatter(params.item_price)"></td>
          </tr>
          <tr>
            <td>Ongkos Kirim</td>
            <td class="text-right" v-text="formatter(params.shipping_cost)"></td>
          </tr>
          <tr v-if="params.use_insurance">
            <td>Biaya Asuransi (Real)</td>
            <td class="text-right" v-text="formatter(insurance_amount.real)"></td>
          </tr>
          <tr v-if="params.use_insurance">
            <td>Biaya Asuransi</td>
            <td class="text-right">
              <span v-text="formatter(insurance_amount.rounded)"></span>
              <small v-text="`(${selected_courier.insurance}%)`"></small>
            </td>
          </tr>
          <tr>
            <td>Biaya COD</td>
            <td class="text-right" v-text="formatter(cod_fee)"></td>
          </tr>
          </tbody>
        </table>
      </div>
      <hr class="py-0 my-0">
      <div class="mt-3 grid grid-cols-2">
        <div class="font-semibold">
          <span>Ditagihkan</span>
        </div>
        <div class="text-right font-medium">
          <span v-text="formatter(cod_value)"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      params: {
        item_price: 115000,
        shipping_cost: 20000,
        selected_courier: "Sicepat",
        use_insurance: true
      },
      options: [
        {
          label: "Sicepat",
          insurance: 0.25,
          insurance_add_cost: 0,
          cod_fee: 3,
          cod_fee_minimum: 2500
        },
        {
          label: "JNE Express",
          insurance: 0.2,
          insurance_add_cost: 5000,
          cod_fee: 3,
          cod_fee_minimum: 2500
        }
      ]
    }
  },
  computed: {
    selected_courier() {
      let option
      this.options.map((value, key) => {
        if (this.params.selected_courier === value.label) {
          option = value
        }
      })
      return option
    },
    sub_total() {
      if (this.params.item_price > 0 && this.params.shipping_cost > 0) {
        let value = +this.params.item_price
        value += +this.insurance_amount.rounded
        value += +this.params.shipping_cost
        return value
      }
      return 0
    },
    cod_value() {
      return this.sub_total + this.cod_fee
    },
    cod_fee() {
      if (this.params.item_price > 0 && this.params.shipping_cost > 0) {
        let value = this.sub_total

        let cod_fee = (value * (this.selected_courier.cod_fee / 100))
        if (cod_fee <= this.selected_courier.cod_fee_minimum) {
          return this.selected_courier.cod_fee_minimum
        }
        return cod_fee
      }
      return 0
    },
    insurance_amount() {
      let real = 0
      let rounded = 0
      if (this.params.item_price > 0 && this.params.use_insurance) {
        real = this.params.item_price * (this.selected_courier.insurance / 100)
        real += this.selected_courier.insurance_add_cost
        rounded = Math.ceil(real / 100) * 100
      }
      return {
        real,
        rounded
      }
    }
  },
  methods: {
    formatter(string) {
      const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      });
      return formatter.format(string)
    }
  }
}
</script>
