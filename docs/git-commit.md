---
id: git-commit
title: Git Commit Message 規範
keywords:
  - Git
---

軟體專案通常會由多個以上開發者共同合作開發，因此，我們需要 Git 來協助管理程式碼版本，而 Commit Message 是紀錄版本更動的摘要，對於其他合作開發者或審核者來說，透過閱讀 Commit Message 就可以在不用閱讀程式碼的情況下大概了解此版本的改動內容。Commit Message 對於專案的維護也十分重要，否則 debug 會很花很多時間。

## 原則 - What, Why, How

好的 Commit Message 要能夠幫助閱讀者理解提交版本的三件事情：`What`、`Why` 以及 `How`
要記得閱讀者是別人而非自己，因此，要撰寫別人看得懂的語句。

#### 1. 這個提交版本做了什麼事情（What）：

這個版本修正了什麼 bug 、新增了什麼 feature、或是優化了什麼效能，也可能只是簡單的文字修正。這是最重要的部分，通常放在 Header ，why 和 how 則是細節和補充。

#### 2. 為什麼要做這件事情（Why）？

如果只記錄提交版本做了什麼事情，但卻沒有說明為什麼要做這件事情，當時間一久，回來追溯問題時常常已經不記得當初更動的動機與原因，所以盡可能地在 body 中提供提交版本的 Why 資訊可以有效幫助我們理解其背後原因。

針對一些直覺的更動與優化，也可以直接合併在 Header 中，如：可閱讀性（readability）、穩定性（stability）、效能（performance）等，然後再針對需要詳加解釋的原因，像是造成效能緩慢或閃退的確切原因寫在 Body 中。

例如：

```
Refactor a feature for stability
```

#### 3. 用什麼方法做到的（How）？

僅補充方法或概念的敘述，例如：什麼演算法、設計模式等，細節可透過更動的程式碼本身或程式碼註解來說明。

例如：

```
Refactor a feature for performance by Factory pattern
```

## 規範與準則

#### 1. 將訊息用空白斷行區分標題與內容

```
Fix companyProfile Bug(標題)

Bug:(內文)
1. Given the user create a group
2. When the user create a company profile
3. JobTitle is on the list of company profile

Expect Result:
JobTitle should not on the list of company profile
```

#### 2. 標題限制在 50 字以內

50 字是建議值，可根據需求做調整，最主要目的是配合 Terminal 或是 Github 的介面限制， 如果超過字數限制的話，就無法完整的顯示在介面當中，導致要閱讀完整訊息就必須要進到內文，會增加閱讀的複雜度和效率。如果發現很難在 50 個字內摘要提交更動，可能代表這個 Commit 涵蓋太多不同目的的更動，這時候可以考慮再把 Commit 切分的更細。

#### 3. 標題開頭使用大寫

#### 4. 標題不以句點結尾

#### 5. 使用祈使句設計標題

使用祈使語氣的概念其實在於，表達命令完成動作，使用原型動詞

#### 6. 內容每行最多 72 字，過多文字則需要斷行

考量到閱讀性，若沒有自行斷行的話，在 Terminal 或是 Github 介面中印出後會導致訊息過長難以閱讀，所以建議維持在 72 個字元內，這部分可以透過文字編輯器的幫忙。

#### 7. 定義和統一訊息中使用的詞彙

為了避免和減少訊息的誤導和模糊不清，團隊可以制定統一的詞彙和風格，如此也可以幫助搜尋特定 Commit 和 Debug

## 風格/詞彙

參考[Conventional Commits](https://www.conventionalcommits.org/)和 [Angular Contributing Guide](https://github.com/angular/angular/blob/master/CONTRIBUTING.md)的撰寫方式，加上自己開發的經驗，整理如下：

Message Header 通常包含幾個元素：`類別(Type)`、`摘要文字(Subject)`，若有跑 Scrum 使用工具如 Jira，則可能還含 `Ticket Number`。

### 標題 Header

#### 類別

將更動內容進行分類，常見關鍵字如下：

- 功能（`feat`）： 實現新功能
- 修復（`fix`）： 修復 bug
- 文件（`docs`）： 任何文件的新增、刪除和修改
- 樣式（`style`）： 不影響程式碼邏輯的樣式變動，如刪除分號、縮排調整
- 重構（`refactor`）： 對既有代碼重構，如變數命名調整
- 測試（`test`）： 新增、刪除、修改測試檔案
- 效能 (`perf`): 提升效能
- `CI` : 改變 CI 配置檔案或 script
- 緊急修正(`hotfix`): 緊急修正嚴重的 bug

標題撰寫案例：

```bash
//<ticket number> <type> <subject>
MLMS-1223: [Feat] Add footer section
```

## 好用工具

1. [gitmoji](https://gitmoji.dev/)

在 Github 提交 commit 時可以加上 emoji 的套件

2. [commitlint](https://github.com/conventional-changelog/commitlint)

用來檢查 commit 格式的工具，倘若不符合設定格式則會報錯且無法 commit

若團隊使用 Jira 工具，可搭配[commitlint-jira](https://github.com/Gherciu/commitlint-jira)套用 Jira 規則

3. [commitizen](https://commitizen-tools.github.io/commitizen/)

提供互動式介面，採用 Angular 社群的 Conventional Commits 規範，讓開發者輕鬆產生符合規範的 commit message

## Git 相關指令

1. `git commit` 提交 commit

```bash
git commit -m "Add foo component" //<message> 提交簡單的 commit
git commit --amend //修改前一個 commit
```

2. `git log` : 查看版本改動的歷史紀錄

```bash
git log --oneline // 查看簡短的歷史紀錄(顯示七碼的版本號以及 commit message)
```

## 參考資料

- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [How to Write Good Commit Messages: A Practical Git Guide](https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/)
- [撰寫有效的 Git Commit Message](http://blog.fourdesire.com/2018/07/03/%E6%92%B0%E5%AF%AB%E6%9C%89%E6%95%88%E7%9A%84-git-commit-message/)
