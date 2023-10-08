<script setup lang="ts">
import { ref } from 'vue'

const activeName = ref('third')
</script>
<template>
  <div>
    <ErTab>
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName" size="small">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName" size="mini">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName" size="mini">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName" size="mini" type="card">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName" size="mini" type="border-card">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName" size="mini" tab-position="left">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName" size="mini" tab-position="bottom">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName" size="mini" tab-position="right">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName" size="mini" type="card" tab-position="left">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName" size="mini" type="card" tab-position="bottom">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
    <ErTab v-model="activeName" size="mini" type="card" tab-position="right">
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
    <ErTab
      v-model="activeName"
      size="mini"
      type="border-card"
      tab-position="left"
    >
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
    <ErTab
      v-model="activeName"
      size="mini"
      type="border-card"
      tab-position="bottom"
    >
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
    <ErTab
      v-model="activeName"
      size="mini"
      type="border-card"
      tab-position="right"
    >
      <ErTabPanel label="首页" name="first">1</ErTabPanel>
      <ErTabPanel label="用户管理" name="second">2</ErTabPanel>
      <ErTabPanel label="角色管理" name="third">3</ErTabPanel>
      <ErTabPanel label="权限管理设置" name="four">4</ErTabPanel>
      <ErTabPanel label="公司审核制度设计" name="five">5</ErTabPanel>
      <ErTabPanel label="金融资产管理审核制度" name="sex">6</ErTabPanel>
      <ErTabPanel label="员工考勤出勤及打卡台账" name="seven">7</ErTabPanel>
    </ErTab>
  </div>
</template>
