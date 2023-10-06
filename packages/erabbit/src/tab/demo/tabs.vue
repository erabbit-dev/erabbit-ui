<script setup>
import Tabs from '../Tabs'
import TabsPanel from '../TabsPanel'
import '../index.scss'
import { ref } from 'vue'
const activeName = ref('third')
</script>
<template>
  <div>
    <Tabs>
      <TabsPanel label="首页">1</TabsPanel>
      <TabsPanel label="用户管理">2</TabsPanel>
      <TabsPanel label="角色管理">3</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName" size="small">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName" size="mini">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName" size="mini">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName" size="mini" type="card">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName" size="mini" type="border-card">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName" size="mini" tab-position="left">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName" size="mini" tab-position="bottom">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName" size="mini" tab-position="right">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName" size="mini" type="card" tab-position="left">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName" size="mini" type="card" tab-position="bottom">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
    <Tabs v-model="activeName" size="mini" type="card" tab-position="right">
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
    <Tabs
      v-model="activeName"
      size="mini"
      type="border-card"
      tab-position="left"
    >
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
    <Tabs
      v-model="activeName"
      size="mini"
      type="border-card"
      tab-position="bottom"
    >
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
    <Tabs
      v-model="activeName"
      size="mini"
      type="border-card"
      tab-position="right"
    >
      <TabsPanel label="首页" name="first">1</TabsPanel>
      <TabsPanel label="用户管理" name="second">2</TabsPanel>
      <TabsPanel label="角色管理" name="third">3</TabsPanel>
      <TabsPanel label="权限管理设置" name="four">4</TabsPanel>
      <TabsPanel label="公司审核制度设计" name="five">5</TabsPanel>
      <TabsPanel label="金融资产管理审核制度" name="sex">6</TabsPanel>
      <TabsPanel label="员工考勤出勤及打卡台账" name="seven">7</TabsPanel>
    </Tabs>
  </div>
</template>
