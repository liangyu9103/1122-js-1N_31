# (25%) JavaScript 網頁設計 1N 期中上機考-1 -- 斷網考試

##### 2024-4-11, at E201

#### Note:

1. 請不要發揮同學愛，作弊雙方除了本次考試 0 分外，平常分數另扣 20 分，情節嚴重者會送校。
2. iClass 上請繳交 mid1_xxxxxxxxx.md, mid1_xx.pdf，還有 p1_xx.zip
3. 請直接將答案寫在 mid1_xx.md 上，老師實作的圖片放在 mid1_htc.pdf 上，請依照老師所給的圖片來實作並標註
4. 跟期中考相關的檔案及目錄名稱有 xx 時，必須要改成學號後 2 碼，沒有修改時，會視違犯情況扣分。
5. 每一張圖片要有機房左側背景，圖片上要有你的學號(或後兩碼)，圖片標註要跟老師所標註的類似。違者會依情節扣分。
6. 請自評分數，將每一題的 ? 填入分數，沒有填者，不會批改，以 0 分計算。

##### Your (Name, ID): (?, ?)

##### P1 (25%) -- 基本題

- P1-1-1 (2%): ? 分
- P1-1-2 (8%): ? 分
- P2-1 (3%): ? 分
- P2-2 (3%): ? 分
- P3-1 (3%): ? 分
- P3-2 (3%): ? 分
- P4-1 (3%): ? 分
-

##### 總分: ? 分

---

## (10%) P1: 顯示規定的 5 筆 blog 資料

請用老師提供的 blog theme，建立 json 陣列，名稱為 p1_data_xx.js，請在 data.js 比較學號最後一碼，比對 id，往下取 5 筆，如果到底，則循環回到第 1 筆繼續往下取。學號最後一碼如為 0，則從第 1 筆往下取 5 筆。下圖是以學號最後一碼為 7 當成範例。請將這 5 筆資料顯示在 p1_xx.html 的 blogs-center 中。

![mid1-p1.png](mid1-p1.png)

#### Your Answer

##### => (2%) 放在 p1_data_xx.js 上的 5 筆 blog 資料

![p1-1-1.png](p1-1-1.png)

##### => (8%) Chrome 顯示如上圖

![p1-1-2.png](p1-1-2.png)

---

#### (6%) P2: 實作 ClearAll, LoadAll

##### ClearAll 會將全部 blogs 清除，如下圖

![mid1-p2-1.png](mid1-p2-1.png)

##### LoadAll 會將 P1 所顯示的 5 筆 blogs 全部還原，如下圖

![mid1-p2-2.png](mid1-p2-2.png)

#### Your Answer

##### => (3%) ClearAll Chrome 截圖，如上圖

![p2-1-1.png](p2-1-1.png)

##### => ClearAll 相對應的 code

![p2-1-2.png](p2-1-2.png)

##### => (3%) LoadAll Chrome 截圖，如上圖

![p2-1-1.png](p2-1-1.png)

##### => LoadAll 相對應的 code

![p2-1-2.png](p2-1-2.png)

---

#### (6%) P3: 實作 Push a Blog, Pop a Blog

##### => Push a Blog 之 Chrome 截圖

連續按下 Push a Blog 4 次，blog 筆數由 7,8,9 到出現 alert 顯示 "All blogs are displayed"

![mid1-p3-1.png](mid1-p3-1.png)

##### => Pop a Blog 之 Chrome 截圖

連續按下 Pop a Blog 7 次，blog 筆數由 5,4,3,2,1,0 到出現 alert 顯示 "No blog to pop"

![mid1-p3-2.png](mid1-p3-2.png)

#### Your Answer

##### => (3%) Push a Blog 之 Chrome 截圖，如上圖

![p3-1-1.png](p3-1-1.png)

##### => Push a Blog 相對應的 code

![p3-1-2.png](p3-1-2.png)

##### => (3%) Pop a Blog 之截圖，如上圖

![p3-2-1.png](p3-2-1.png)

##### => Pop a Blog 相對應的 code

![p3-2-2.png](p3-2-2.png)

---

#### (3%) P4: 實作 blog Delete

##### => blog Delete 之 Chrome 截圖

由最後一筆連續按下 Delete 4 次，顯示 blog 筆數由 5,4,3,2

![mid1-p4.png](mid1-p4.png)

#### Your Answer

##### => Push a Blog 之 Chrome 截圖，如上圖

![p3-1-1.png](p3-1-1.png)

##### => Push a Blog 相對應的 code

![p3-1-2.png](p3-1-2.png)
