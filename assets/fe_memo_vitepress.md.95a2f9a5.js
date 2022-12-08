import{_ as s,c as n,o as a,e}from"./app.4aa8fda0.js";const l="/zcx-docs/image/memo/vitepress/Snipaste_2022-11-26_10-34-02.png",p="/zcx-docs/image/memo/vitepress/Snipaste_2022-11-26_10-36-37.png",i="/zcx-docs/image/memo/vitepress/Snipaste_2022-11-26_10-39-50.png",o="/zcx-docs/image/memo/vitepress/Snipaste_2022-11-26_10-40-27.png",c="/zcx-docs/image/memo/vitepress/Snipaste_2022-11-26_10-42-32.png",r="/zcx-docs/image/memo/vitepress/Snipaste_2022-11-26_10-47-03.png",t="/zcx-docs/image/memo/vitepress/Snipaste_2022-11-26_10-51-52.png",d="/zcx-docs/image/memo/vitepress/Snipaste_2022-11-26_10-54-06.png",u="/zcx-docs/image/memo/vitepress/Snipaste_2022-11-26_10-59-40.png",b="/zcx-docs/image/memo/vitepress/Snipaste_2022-11-26_11-00-07.png",x=JSON.parse('{"title":"vitepress + github page","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6587\u6863","slug":"\u6587\u6863","link":"#\u6587\u6863","children":[]},{"level":2,"title":"\u521B\u5EFA github \u4EE3\u7801\u4ED3\u5E93","slug":"\u521B\u5EFA-github-\u4EE3\u7801\u4ED3\u5E93","link":"#\u521B\u5EFA-github-\u4EE3\u7801\u4ED3\u5E93","children":[]},{"level":2,"title":"\u672C\u5730\u8FD0\u884C","slug":"\u672C\u5730\u8FD0\u884C","link":"#\u672C\u5730\u8FD0\u884C","children":[]},{"level":2,"title":"\u521B\u5EFA workflows","slug":"\u521B\u5EFA-workflows","link":"#\u521B\u5EFA-workflows","children":[]},{"level":2,"title":"\u751F\u6210 github_token(secrets)","slug":"\u751F\u6210-github-token-secrets","link":"#\u751F\u6210-github-token-secrets","children":[]},{"level":2,"title":"\u914D\u7F6E config.js","slug":"\u914D\u7F6E-config-js","link":"#\u914D\u7F6E-config-js","children":[]},{"level":2,"title":"\u63D0\u4EA4\u4EE3\u7801","slug":"\u63D0\u4EA4\u4EE3\u7801","link":"#\u63D0\u4EA4\u4EE3\u7801","children":[]},{"level":2,"title":"\u67E5\u770B actions","slug":"\u67E5\u770B-actions","link":"#\u67E5\u770B-actions","children":[]},{"level":2,"title":"\u67E5\u770B pages","slug":"\u67E5\u770B-pages","link":"#\u67E5\u770B-pages","children":[]},{"level":2,"title":"\u4EE3\u7801","slug":"\u4EE3\u7801","link":"#\u4EE3\u7801","children":[]}],"relativePath":"fe/memo/vitepress.md"}'),m={name:"fe/memo/vitepress.md"},g=e('<h1 id="vitepress-github-page" tabindex="-1">vitepress + github page <a class="header-anchor" href="#vitepress-github-page" aria-hidden="true">#</a></h1><h2 id="\u6587\u6863" tabindex="-1">\u6587\u6863 <a class="header-anchor" href="#\u6587\u6863" aria-hidden="true">#</a></h2><ul><li>\u5B98\u7F51\uFF1A<a href="https://vitepress.vuejs.org" target="_blank" rel="noreferrer">https://vitepress.vuejs.org</a></li><li>\u4E2D\u6587\uFF1A<a href="https://vitejs.cn/vitepress/" target="_blank" rel="noreferrer">https://vitejs.cn/vitepress/</a></li></ul><h2 id="\u521B\u5EFA-github-\u4EE3\u7801\u4ED3\u5E93" tabindex="-1">\u521B\u5EFA github \u4EE3\u7801\u4ED3\u5E93 <a class="header-anchor" href="#\u521B\u5EFA-github-\u4EE3\u7801\u4ED3\u5E93" aria-hidden="true">#</a></h2><p><img src="'+l+'" alt="An image"></p><h2 id="\u672C\u5730\u8FD0\u884C" tabindex="-1">\u672C\u5730\u8FD0\u884C <a class="header-anchor" href="#\u672C\u5730\u8FD0\u884C" aria-hidden="true">#</a></h2><blockquote><p>git clone &lt;\u4ED3\u5E93\u5730\u5740&gt;</p></blockquote><p><img src="'+p+`" alt="An image"></p><ul><li>1.\u8FDB\u5165\u9879\u76EE\u6839\u76EE\u5F55,\u521D\u59CB\u5316</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn init -y</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>2.\u5B89\u88C5 VitePress</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn add --dev vitepress</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>3.\u521B\u5EFA\u7B2C\u4E00\u7BC7\u6587\u6863</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">mkdir docs &amp;&amp; echo &#39;# Hello VitePress&#39; &gt; docs/index.md</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>4.\u5728 <code>package.json</code>\u6DFB\u52A0\u4E00\u4E9B<code>script</code></li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:dev&quot;: &quot;vitepress dev docs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;docs:serve&quot;: &quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="`+i+`" alt="An image"></p><ul><li>5.\u8FD0\u884C</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">yarn docs:dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>open <code>http://localhost:5174</code></p><p><img src="`+o+'" alt="An image"></p><h2 id="\u521B\u5EFA-workflows" tabindex="-1">\u521B\u5EFA workflows <a class="header-anchor" href="#\u521B\u5EFA-workflows" aria-hidden="true">#</a></h2><blockquote><p>\u6839\u76EE\u5F55\u521B\u5EFA <code>.github/workflows/jekyll-gh-pages.yml</code></p></blockquote><blockquote><p><code>VITEPRESS</code> \u662F\u53D8\u91CF(\u548C\u540E\u9762\u63D0\u5230\u7684name\u540D\u79F0\u8981\u4E00\u6837\uFF0C\u4E0D\u7136\u4F1Adeploy\u4E0D\u6210\u529F)</p></blockquote><p><img src="'+c+`" alt="An image"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">name: Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">on:</span></span>
<span class="line"><span style="color:#A6ACCD;">  push:</span></span>
<span class="line"><span style="color:#A6ACCD;">    branches:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - main</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">jobs:</span></span>
<span class="line"><span style="color:#A6ACCD;">  deploy:</span></span>
<span class="line"><span style="color:#A6ACCD;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    steps:</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          fetch-depth: 0</span></span>
<span class="line"><span style="color:#A6ACCD;">      - uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          node-version: 16</span></span>
<span class="line"><span style="color:#A6ACCD;">          cache: yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">      - run: yarn install --frozen-lockfile</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        run: yarn docs:build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">      - name: Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        uses: peaceiris/actions-gh-pages@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        with:</span></span>
<span class="line"><span style="color:#A6ACCD;">          github_token: \${{ secrets.VITEPRESS }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          publish_dir: docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#A6ACCD;">          # cname: example.com # if wanna deploy to custom domain</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="\u751F\u6210-github-token-secrets" tabindex="-1">\u751F\u6210 github_token(secrets) <a class="header-anchor" href="#\u751F\u6210-github-token-secrets" aria-hidden="true">#</a></h2><blockquote><p>github \u4E2A\u4EBA\u4E3B\u9875 Settings Developer settings</p></blockquote><p>\u586B\u597D\u4FE1\u606F\uFF0C\u4FDD\u5B58\u540E\u3002\u4F1A\u7ED9\u4E00\u4E32\u5B57\u7B26\uFF0C\u590D\u5236\uFF0C\u4E0B\u4E00\u6B65\u4F7F\u7528\u3002</p><p><img src="`+r+'" alt="An image"></p><blockquote><p>\u4EE3\u7801\u4ED3\u5E93-&gt; settings-&gt; secret</p></blockquote><p>\u5C06\u521A\u624D\u7684\u5B57\u7B26\u586B\u5165<code>Secret</code>\uFF0C<code>Name</code>\u662F\u4E4B\u524D\u63D0\u5230\u7684<code>VITEPRESS, \u8FD9\u4E24\u4E2A\u53D8\u91CF\u8981\u4FDD\u6301\u4E00\u81F4</code>,\u53EF\u81EA\u5B9A\u4E49\uFF08\u8F93\u5165\u5C0F\u5199\u5B57\u6BCD\uFF0C\u4F1A\u81EA\u52A8\u8F6C\u6362\u5927\u5199\uFF09</p><p><img src="'+t+'" alt="An image"></p><h2 id="\u914D\u7F6E-config-js" tabindex="-1">\u914D\u7F6E config.js <a class="header-anchor" href="#\u914D\u7F6E-config-js" aria-hidden="true">#</a></h2><blockquote><p>\u521B\u5EFA<code>/docs/.vitepress/config.js</code></p></blockquote><p>\u4E2D\u95F4\u586B\u5199\u4ED3\u5E93\u540D\u79F0\uFF0C\u5FC5\u987B\u4EE5<code>/</code>\u5F00\u59CB\u7ED3\u675F</p><p><img src="'+d+`" alt="An image"></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/test-vitepress/</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u63D0\u4EA4\u4EE3\u7801" tabindex="-1">\u63D0\u4EA4\u4EE3\u7801 <a class="header-anchor" href="#\u63D0\u4EA4\u4EE3\u7801" aria-hidden="true">#</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">git commot -m &#39;commit&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git push</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u67E5\u770B-actions" tabindex="-1">\u67E5\u770B actions <a class="header-anchor" href="#\u67E5\u770B-actions" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u67E5\u770B\u662F\u5426\u90E8\u7F72\u6210\u529F\uFF0C\u7EFF\u8272\u4E3A\u6210\u529F\uFF0C\u7EA2\u8272\u4E3A\u5931\u8D25\u3002\u53EF\u4EE5\u70B9\u8FDB\u53BB\u770B\u62A5\u9519\u4FE1\u606F</p><p><img src="`+u+'" alt="An image"></p><h2 id="\u67E5\u770B-pages" tabindex="-1">\u67E5\u770B pages <a class="header-anchor" href="#\u67E5\u770B-pages" aria-hidden="true">#</a></h2><p>actions \u6210\u529F\u540E\uFF0C\u8FDB\u5165 settings/pages\uFF08\u6700\u4E0A\u9762\u6709\u4E00\u4E2A\u5730\u5740\uFF0C\u53EF\u80FD\u4F1A\u5EF6\u8FDF\u51FA\u73B0\uFF09\u70B9\u51FB\u76F4\u63A5\u8BBF\u95EE\uFF0C\u67E5\u770B\u662F\u5426\u6210\u529F\u3002</p><p><img src="'+b+'" alt="An image"></p><h2 id="\u4EE3\u7801" tabindex="-1">\u4EE3\u7801 <a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a></h2><ul><li>github : <a href="https://github.com/X-swordx/zcx-docs" target="_blank" rel="noreferrer">github</a></li><li>blog : <a href="https://x-swordx.github.io/zcx-docs/" target="_blank" rel="noreferrer">docs</a></li></ul>',48),h=[g];function C(A,y,v,D,_,k){return a(),n("div",null,h)}const q=s(m,[["render",C]]);export{x as __pageData,q as default};
