# github-actions-sandbox

このリポジトリは、GitHub Actionsの動作検証や自動化の実験を行うためのサンドボックスです。

## Create Issue
サンプルとして、1件のIssueを作成するシンプルなワークフローです。

### 構成
- `.github/workflows/create-issue.yml`  
  GitHub Issueを自動作成するワークフローです。

### 使い方
1. ワークフロー「Create Issue」を手動実行（workflow_dispatch）すると、  
   `.github/workflows/create-issue.yml` が実行され、GitHub Issueが自動作成されます。


## Create Issues from JSON
### 構成
- `js/create_issues.js`  
  JSONファイル（`data/issue.json`）から複数のIssue用ペイロードファイルを生成するNode.jsスクリプトです。

- `data/issue.json`  
  作成したいIssueの情報（タイトル、本文、ラベル、アサイン先など）をまとめたJSONファイルです。

- `.github/workflows/create-issues-from-json.yml`  
  上記スクリプトで生成したペイロードファイルをもとに、GitHub Issueを自動作成するワークフローです。


## 使い方

1. 必要に応じて `data/issue.json` を編集し、作成したいIssue情報を記述します。
2. ワークフロー「Create Issues from JSON」を手動実行（workflow_dispatch）すると、  
   `js/create_issues.js` が実行され、ペイロードファイルが生成されます。
3. 生成されたペイロードファイルごとにGitHub Issueが自動作成されます。

## 注意事項

- このリポジトリは検証・学習用途です。本番運用の際は十分にご注意ください。

---
