# 一、简介

typescript 是 javascript 的超集

更加严谨，编写代码的时候静态类型的校验

```bash
npm i -g typescript@4.5.2
tsc -v
```

在项目文件夹中执行下面命令表示ts初始化项目

```bash
tsc -init
```

通过界面实时构建ts文件

vscode 里面的终端找到执行命令里面的监视 tsconfig.json 文件

通过命令实时构建ts文件

```bash
tsc -p tsconfig.json --watch
```