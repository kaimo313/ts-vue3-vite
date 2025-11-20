import type { Plugin } from 'vite'
import { writeFileSync } from 'fs'
import { resolve } from 'path'
// 同步子进程
import { execSync } from 'child_process'

// 时间格式生成
function dateFormat(date: Date): string {
    let y = date.getFullYear();
    let M = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${y}-${M}-${d} ${h}:${m}:${s}`;
}

/**
 * 利用同步子进程获取分支信息
 * 获取 git 指定信息方法（https://git-scm.com/docs/pretty-formats）
 * git name-rev --name-only HEAD 这个命令会在终端输出你当前的版本或标签信息。
 *  - 当前分支名：master
 * git show -s --format=%d 这个命令会在终端输出你当前的 ref名称。
 *  - 当前分支名：(HEAD -> master, origin/master, origin/HEAD)
 * */ 
function getBranchVersionInfo(): string {
    // 当前分支名
    let vName = execSync("git name-rev --name-only HEAD").toString().trim();
    // 提交的commit hash
    let commitHash = execSync("git show -s --format=%H").toString().trim();
    // 提交人姓名
    let name = execSync("git show -s --format=%cn").toString().trim();
    // 提交日期
    let date = dateFormat(new Date(execSync("git show -s --format=%cd").toString()));
    // 提交描述
    let message = execSync("git show -s --format=%s").toString().trim();
    return `当前分支名：${vName}\n` +
        `\n` + 
        `提交的hash：${commitHash}\n` +
        `\n` + 
        `提交人姓名：${name}\n` +
        `\n` + 
        `提交日期：${date}\n` +
        `\n` + 
        `提交描述：${message}`;
}

export default function BranchVersionVitePlugin(): Plugin {
    let outDir = ''
    return {
        name: 'branch-version-vite-plugin',
        apply: 'build', // 关键：仅对 build 生效，dev 阶段跳过
        // configResolved 在 Vite 完成配置文件（vite.config.ts）解析与合并之后立即被调用。
        configResolved(config) {
            // 先保存 outDir，后面用
            outDir = config.build.outDir
        },
        // 整个构建完全结束
        async closeBundle() {
            const content = await getBranchVersionInfo()
            // 写到打包输出的目录
            const outPath = resolve(outDir, 'version.txt')
            writeFileSync(outPath, content, 'utf-8')
            console.log(`版本文件【version.txt】已生成`)
        }
    }
}