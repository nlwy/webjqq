<template>
  <div class="overview">
    <el-card>
      <div>
        <span>下单时间：</span>
        <el-select
          placeholder="请选择"
          v-model="value"
        >
          <el-option
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-for="item in options"
          ></el-option>
        </el-select>
        <!-- 日期 -->
        <el-date-picker
          :picker-options="pickerOptions"
          align="right"
          end-placeholder="结束日期"
          range-separator="至"
          start-placeholder="开始日期"
          type="daterange"
          unlink-panels
          v-model="valueData"
        ></el-date-picker>
        <span>订单状态：</span>
        <el-select
          placeholder="请选择"
          v-model="valueStatus"
        >
          <el-option
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-for="item in orderStatus"
          ></el-option>
        </el-select>
        <span>订单类型：</span>
        <el-select
          placeholder="请选择"
          v-model="valueType"
        >
          <el-option
            :key="item.value"
            :label="item.label"
            :value="item.value"
            v-for="item in orderType"
          ></el-option>
        </el-select>
      </div>
      <div class="order-list">
        <span>&nbsp;&nbsp;&nbsp;订单号：</span>
        <el-input
          placeholder="请输入内容"
          v-model="valueSearch"
        >
          <i
            class="el-input__icon el-icon-search"
            slot="prefix"
          ></i>
        </el-input>
        <el-button type="primary">查询订单</el-button>
      </div>
    </el-card>
    <el-card class="card-table">
      <div class="button-list">
        <el-button type="primary">导出数据</el-button>
        <el-button type="danger">传送到明道云</el-button>
      </div>
      <div class="content-table">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%"
        >
          <el-table-column
            label="商品信息"
            prop="date"
            width="180"
          ></el-table-column>
          <el-table-column
            label="订单号"
            prop="name"
            width="180"
          ></el-table-column>
          <el-table-column
            label="订单状态"
            prop="address"
          ></el-table-column>
          <el-table-column
            label="时间"
            prop="address"
          >
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">222</span>
            </template>
          </el-table-column>
          <el-table-column
            label="预估金额"
            prop="address"
          ></el-table-column>
          <el-table-column
            label="预估佣金"
            prop="address"
          ></el-table-column>
          <el-table-column
            label="佣金比例"
            prop="address"
          ></el-table-column>
          <el-table-column
            label="分成比例"
            prop="address"
          ></el-table-column>
          <el-table-column
            label="实际金额"
            prop="address"
          ></el-table-column>
          <el-table-column
            label="实际佣金"
            prop="address"
          ></el-table-column>
          <el-table-column
            label="数量"
            prop="address"
          ></el-table-column>
          <el-table-column
            label="推广信息"
            prop="address"
          ></el-table-column>
          <el-table-column
            label="订单类型"
            prop="address"
          ></el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['roles'])
  },
  data() {
    return {
      tableData: [],
      options: [
        {
          value: '选项1',
          label: '下单时间'
        },
        {
          value: '选项2',
          label: '完成时间'
        }
      ],
      orderStatus: [
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '代付款'
        },
        {
          value: '选项3',
          label: '已付款'
        },
        {
          value: '选项4',
          label: '已完成'
        },
        {
          value: '选项5',
          label: '无效'
        }
      ],
      orderType: [
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '京享红包'
        },
        {
          value: '选项3',
          label: '拼购'
        },
        {
          value: '选项4',
          label: '首购'
        },
        {
          value: '选项5',
          label: '复购'
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value: '',
      valueData: '',
      valueStatus: '',
      valueType: '',
      valueSearch: ''
    }
  },
  mounted() {}
}
</script>

<style scoped lang="stylus">
.button-list
  display flex
  justify-content flex-end

span
  color #666
  font-size 14px

.card-table
  margin-top 20px

.el-select
  margin-right 10px

.el-date-editor
  margin-right 10px

.el-input
  margin-right 10px
  width auto

.order-list
  margin-top 20px
</style>
