const fs = require('fs');
const path = 'data/issue.json';
if (!fs.existsSync(path)) {
  console.error(`ファイルが見つかりません: ${path}`);
  process.exit(1);
}
const issueData = JSON.parse(fs.readFileSync(path, 'utf8'));

// issueDataの共通情報を更新
issueData.issues.forEach((issue, idx) => {
    const title = issue.title;
    const body = issue.body;
    const labels  = issue.labels || [];
    const payload = {
        title,
        body,
        assignees: issueData.common.assignees,
        labels: [...labels],
    };
    const safeName = title.replace(/\s+/g, "_");

    console.log(`::group::Issue Payload`);
    console.log(JSON.stringify(payload, null, 2));
    console.log('::endgroup::');

    fs.writeFileSync(`issue_${safeName}_${idx}.json`, JSON.stringify(payload));
});

// すべてのpayloadファイルを一覧表示（デバッグ用）
const files = fs.readdirSync('.').filter(f => /^issue_.*\.json$/.test(f));
console.log('生成されたファイル一覧:');
files.forEach(f => console.log(f));