# 上传与日常维护说明

## 本次上传

1. 解压压缩包，打开 `website` 文件夹。
2. 在 GitHub 仓库 `zhilongxue98/zhilongxue98.github.io` 的 `main` 分支根目录选择 **Add file → Upload files**。
3. 将 `website` **里面的全部文件和文件夹**上传到仓库根目录，覆盖同名文件。不要把 `website` 文件夹本身作为额外一层目录上传，也不要上传 ZIP 文件本身。
4. 提交修改，等待 GitHub Pages 部署完成，再刷新网站；若仍看到旧样式，可按 Ctrl+F5 强制刷新。

保留现有 GitHub Pages 发布设置和域名。包内 `CNAME` 与原仓库一致，仍为 `www.zhilongxue.cn`。部署直接使用静态文件，不需要安装 npm、运行 Vite 或执行构建。

## 两页结构

- `index.html`：Home。保持原有介绍、照片和版式。导航仅保留 Home 与 Research & CV；News 使用中性标签，原报告标题与链接保留。
- `research.html`：Research & CV。包含 CV 查看／下载入口、研究方向及四条代表作。
- `cv.html`、`talks.html`：仅作为旧链接兼容跳转，自动前往 `research.html#cv`，不再存放履历、报告或会议内容。这两个文件无需维护；本次上传时覆盖即可，不必额外手动删除。

## 以后需要更新什么

| 变化 | 更新位置 |
| --- | --- |
| 新论文、任职、教学、报告、会议、资助等完整记录 | 更新个人 CV 并覆盖根目录 `CV_zhilong.pdf`，保持文件名不变；两个入口会共同使用该文件。 |
| 希望替换网站展示的代表作 | 编辑 `research.html` 中 `selected-publications` 列表的一条记录；保留 BibTeX 下载时，一并更新对应的 `bibtex/` 文件。无需把完整论文列表再抄到网页。 |
| 网站更新时间 | 只改 `research.html` 页脚的 `Last updated ...` 这一处；Home 和旧页面跳转文件不显示更新时间。 |
| 新的 News 信息 | 可选：修改 `index.html` 的 `home-news` 一行；其它正文通常无需更新。 |

CV 按钮不标注页数或版本日期，日后换 PDF 不必再同步这些信息。

## 简历源文件

本次 `CV_zhilong.pdf` 由你提供的最新版 `CV_Zhilong_Xue_EN_v6(1).tex` 编译，共两页，保留七条论文记录和其余学术内容。按照此前关于公开个人信息的要求，公开版本仅省略 CSC 编号；原上传文件没有修改。

公开 PDF 的对应 TeX 放在 `cv-source/CV_zhilong.tex`，使用标准 TeX 发行版自带字体。在网站根目录运行以下命令两次可重新编译：

```sh
pdflatex -interaction=nonstopmode -halt-on-error -jobname=CV_zhilong cv-source/CV_zhilong.tex
```

如果你更习惯在 Overleaf 或自己的 TeX 编辑器中维护 CV，编译后只需将 PDF 命名为 `CV_zhilong.pdf` 并上传覆盖即可。若将源文件也保存在仓库中，请同步相应的 TeX。

## 保持简洁

建议代表作列表维持四条左右。完整的任职、教育、访问、报告、会议和资助记录均以 CV 为准，不再建立对应的网页清单。

详见 `WEBSITE_REDESIGN_CHANGELOG.md` 与 `WEBSITE_QA_REPORT.md`。
