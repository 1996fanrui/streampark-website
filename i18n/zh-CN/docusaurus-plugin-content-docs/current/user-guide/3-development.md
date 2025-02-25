---
id: 'development'
title: '开发环境'
sidebar_position: 3
---

> [StreamPark](https://github.com/streamxhub/streamx) 遵循 Apache-2.0 开源协议，将会是个长期更新的活跃项目，欢迎大家提交 [PR](https://github.com/streamxhub/streamx/pulls) 或 [ISSUE](https://github.com/streamxhub/streamx/issues/new/choose) 喜欢请给个 [Star](https://github.com/streamxhub/streamx/stargazers) 您的支持是我们最大的动力。 该项目自开源以来就受到不少朋友的关注和认可，表示感谢。已陆续有来自金融，数据分析，车联网，智能广告，地产等公司的朋友在使用，也不乏来自一线大厂的朋友在使用。
同时 StreamPark 社区是一个非常开放,相互协助,尊重人才的社区。我们也非常欢迎更多的开发者加入一块贡献，不只是代码的贡献，还寻求使用文档，体验报告，问答等方面的贡献。

越来越多的开发者已经不满足简单的安装使用，需要进一步研究或基于其源码二开或扩展相关功能，这就需要进一步的对 StreamPark 深入了解。 本章节具体讲讲如何在本地搭建 `streampark-console` 流批一体平台的开发环境，为了方便讲解，本文中所说的 `streampark-console` 均指 `streampark-console 平台`。

StreamPark Console 从 1.2.0 开始实现了 Flink-Runtime 的解耦，即**不强制依赖 Hadoop 或 Kubernetes 环境**，可以根据实际开发/使用需求自行安装 Hadoop 或 Kubernetes。

## 安装 Hadoop（可选，YARN Runtime）

关于 hadoop 环境有两种方式解决，` 本地安装 hadoop 环境 ` 和 ` 使用已有的 hadoop 环境 `,不论是本地安装 hadoop 环境还是使用已有的 hadoop 环境，都需要确保以下条件
- 安装并且配置好 `hadoop`,`yarn`
- 已配置 `HADOOP_HOME` 和 `HADOOP_CONF_DIR`
- 已成功启动 `hadoop` 和 `yarn`

### 本地安装 Hadoop 环境

关于如何在本地安装 Hadoop 环境可自行查阅相关资料，这里不作过多讲解。

### 使用已有 Hadoop 集群

推荐使用已有的 Hadoop 集群 ( 测试环境 ) ,如使用已有 hadoop 集群需要将以下配置 copy 到开发机器

- `core-site.xml`, `hdfs-site.xml`, `yarn-site.xml` 这三个配置文件 copy 到开发机器
- 如果开启了 kerberos 认证，需要将 `keytab` 文件和 `krb5.conf` copy 到开发机器

需要注意的是，`core-site.xml`, `hdfs-site.xml`, `yarn-site.xml` 这些配置文件里的一系列主机地址 ( host ) 需要在当前的开发机器上配置出来，需要确保本机可以连接集群里的机器。


## 安装 Kubernetes （可选，K8s Runtime）

本地开发可以通过 MiniKube 或 KubeSphere 等项目快速安装 Kubernetes 环境，当然选择现有的 K8s Cluster 设施更加推荐。此外按时计费的腾讯云 TKE / 阿里云 ACK 也是快速开发很好的选择。

额外配置需求请参考： [**StreamPark Flink-K8s 集成支持**](../flink-k8s/1-deployment.md)

## 安装 Flink（可选，Standalone Runtime）

从官网下载 Flink,并且启动测试，配置 FLINK_HOME
```shell
wget https://mirrors.bfsu.edu.cn/apache/flink/flink-1.13.1/flink-1.13.1-bin-scala_2.11.tgz
tar xzf flink-1.13.1-bin-scala_2.11.tgz /opt/
cd /opt/flink-1.13.1
```
启动本地 Flink 群集，可以检查下 flink 是否正常启动
```
./bin/start-cluster.sh
```


## 安装 Maven

最新的 Maven 下载地址：`http://maven.apache.org/download.cgi`，我们创建一个连接，以便 mvn 可以在任何地方运行。
```shell
cd ~
wget https://mirrors.bfsu.edu.cn/apache/maven/maven-3/3.8.1/binaries/apache-maven-3.8.1-bin.tar.gz
tar -xzvf apache-maven-3.8.1-bin.tar.gz
ln -s /root/apache-maven-3.8.1/bin/mvn /usr/bin/mvn
```

## 安装 MySQL

`console` 用到了 MySQL,因此需要准备 MySQL 环境，你可以本地安装 MySQL,也可以直接使用已有的 MySQL,关于 MySQL 的安装配置，请自行查阅资料，这里不作过多讲解

## 安装 Nodejs

`console` 前端部分采用 nodejs 开发，需要 nodejs 环境，下载安装最新的 nodejs 即可

## 安装配置 StreamPark

如果以上准备工作都已经就绪，此时就可以安装配置 `streampark-console` 了，`streampark-console` 是前后端分离的项目，在项目最终打包部署时为了方便快捷，减少用户的使用和学习成本，使用了前后端混合打包部署模式，但在开发阶段建议使用前后端分离模式进行开发调试，具体步骤如下

### 后端

`streampark-console` 后端采用 springBoot + Mybatis 开发， JWT 权限验证，非常常见的后端技术栈。下面来看看后端按照部署具体流程

#### 编译

首先将 `StreamPark` 工程下载到本地并且编译

```shell
git clone git@github.com:apache/incubator-streampark.git streampark
cd streampark
mvn clean install -DskipTests -Denv=prod
```

#### 解包

安装完成之后就看到最终的工程文件解包，位于 `streamx/streampark-console/streampark-console-service/target/streampark-console-service-${version}-bin.tar.gz`,解包之后的目录如下:

```textmate
.
streampark-console-service-${version}
├── bin
│    ├── flame-graph
│    ├──   └── *.py
│    ├── startup.sh
│    ├── setclasspath.sh
│    ├── shutdown.sh
│    ├── yaml.sh
├── conf
│    ├── application.yaml
│    ├── flink-application.template
│    ├── logback-spring.xml
│    └── ...
├── lib
│    └── *.jar
├── plugins
│    ├── streamx-jvm-profiler-1.0.0.jar
│    └── streamx-flink-sqlclient-1.0.0.jar
├── logs
├── temp
```
将解包后的整个工程文件 copy 到 target 之外的其他任意位置即可完成此步骤，该步主要是防止下次执行 mvn clean 被清理，如放到 `/opt/streamx/`,则此时该文件的完整路径是 `/opt/streampark/streampark-console-service-${version}`,记住这个路径，后面会用到,注意该路径中间不要存在空格

#### 配置

用 IDE 导入刚从 git 上 clone 下来的 StreamPark 源码 ( 推荐使用 `IntelliJ IDEA` ) ,进入到 `resources` 下，编辑 application.yml,找到 `datasource`,修改下 jdbc 的连接信息，具体可参考安装部署章节 [修改配置](http://www.streamxhub.com/zh/doc/console/deploy/#%E4%BF%AE%E6%94%B9%E9%85%8D%E7%BD%AE) 部分

<img src="/doc/image/streamx_conf.jpg" />

如果你要连接的目标集群开启了 kerberos 认证，则需要配置 kerberos 信息，在 `resources` 下找到 `kerberos.xml` 配置上相关信息即可，默认 kerberos 是关闭状态，要启用需将 `enable` 设置为 true, 如下:

```yml
security:
  kerberos:
    login:
      enable: false
      principal:
      krb5:
      keytab:
java:
  security:
    krb5:
      conf:
```

#### 启动

`streampark-console` 是基于 springBoot 开发的 web 应用，`com.streamxhub.streamx.console.StreamParkConsole` 为主类， 在启动主类之前，需要设置下 `VM options` 和 `Environment variables`

##### VM options

在 `VM options` 需要设置 `app.home`:值为上面解包后的 streampark-console 的完整路径:
```shell
-Dapp.home=/opt/streampark/streampark-console-service-${version}
```
<br></br>
如果开发机使用的 jdk 版本是 jdk1.8 以上版本， 则需要加上如下参数: <br></br>

```shell
--add-opens java.base/jdk.internal.loader=ALL-UNNAMED --add-opens jdk.zipfs/jdk.nio.zipfs=ALL-UNNAMED
```

##### Environment variables

如使用非本地安装的 hadoop 集群 ( 测试 hadoop ) `Environment variables` 中需要配置 `HADOOP_USER_NAME` 和 `HADOOP_CONF_DIR`,
`HADOOP_USER_NAME` 为 hdfs 或者有读写权限的 hadoop 用户名，`HADOOP_CONF_DIR` 为上面第一步安装 hadoop 步骤中从测试集群 copy 相关配置文件在开发机器上的存放位置，如果是本地安装的 hadoop 则不需要配置该项，

<img src="/doc/image/streamx_ideaopt.jpg" />

如果一切准假就绪，就可以直接启动 `StreamParkConsole` 主类启动项目，后端就启动成功了。会看到有相关的启动信息打印输出

### 前端

streamx web 前端部分采用 nodejs + vue 开发，因此需要在机器上按照 node 环境，完整流程如下:

#### 修改配置

由于是前后端分离项目，前端需要知道后端 ( streampark-console ) 的访问地址，才能前后配合工作，因此需要更改Base API,具体位置在:
`streampark-console/streampark-console-webapp/.env.development`

![web配置](/doc/image/streamx_websetting.png)

配置默认如下:

```javascript
VUE_APP_PORT = 10003
VUE_APP_BASE_API = http://localhost:10000
```

参数说明:
* `VUE_APP_PORT`: 前端项目启动的端口
* `VUE_APP_BASE_API`: 请求后端的url地址

#### 编译项目

接下来需要编译项目，具体步骤如下:

```shell
cd streampark-console/streampark-console-webapp
npm install
```

#### 启动项目

以上步骤执行完毕即可启动项目即可

```shell
cd streampark-console/streampark-console-webapp
npm run serve
```
