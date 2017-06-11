<template>
  <div class="container">
    <div class="row">
      <div class="col-6 col-md-3" v-for="widget in sampleApiMetricsSparklines">
        <div class="card card-block">
          <div class="row">
            <div class="col-5">
              <metric-table
                :label="widget.metricData.label"
                :value="widget.metricData.value"
                :delta="widget.metricData.delta"
                :deltaClass="widget.metricData.deltaClass">
              </metric-table>
            </div>

            <div class="col-7">
              <!-- Sparkline chart -->
              <chartjs-line
                :labels="widget.chartLabels"
                :datasets="widget.chartDatasets"
                :option="widget.chartOptions"
                :scalesdisplay="false"
                :bordercolor="null"
                :pointbordercolor="null"
                :pointhoverbackgroundcolor="null"
                :pointhoverbordercolor="null"
                :showscales="false">
              </chartjs-line>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <location-card></location-card>
      </div>

      <div class="col-md-6">
        <div class="card">
          <h3 class="h5 card-header">Contacts</h3>
          <div class="list-group-flush">
            <a class="list-group-item list-group-item-action" v-for="user in sampleApiPeople" :href="user.url">
              <img class="list-group-item__start-detail avatar" :src="user.image">
              <div class="list-group-item__text">
                <h4 class="list-group-item__title">{{ user.name }}</h4>
                <p class="list-group-item__subtitle">{{ user.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocationCard from './LocationCard'
import MetricTable from '@/components/metric-table/MetricTable'

import sampleApiMetricsSparklines from './sample-api-metrics-sparklines'
import sampleApiPeople from './sample-api-people'

export default {
  data: function () {
    return {
      sampleApiMetricsSparklines,
      sampleApiPeople
    }
  },
  components: {
    LocationCard,
    MetricTable
  }
}
</script>
