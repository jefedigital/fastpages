
var documents = [{
    "id": 0,
    "url": "https://jefedigital.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://jefedigital.github.io/about/",
    "title": "About Me",
    "body": "This is where you put the contents of your About page. Like all your pages, it’s in Markdown format. This website is powered by fastpages 1.       a blogging platform that natively supports Jupyter notebooks in addition to other formats.  &#8617;    "
    }, {
    "id": 2,
    "url": "https://jefedigital.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://jefedigital.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 4,
    "url": "https://jefedigital.github.io/2020/02/25/test-post.html",
    "title": "Title",
    "body": "2020/02/25 -           This is a title&#182;      import pandas as pdimport psycopg2import reimport yaml          # get configswith open(&#39;config. yml&#39;, &#39;r&#39;) as config: cfg = yaml. full_load(config)  ---------------------------------------------------------------------------FileNotFoundError             Traceback (most recent call last)&lt;ipython-input-2-c764f168d9ab&gt; in &lt;module&gt;   1 # get configs----&gt; 2 with open(&#39;config. yml&#39;, &#39;r&#39;) as config:   3  cfg = yaml. full_load(config)FileNotFoundError: [Errno 2] No such file or directory: &#39;config. yml&#39;        # get tables in schemaquery = &quot;select viewname from pg_catalog. pg_views where schemaname = &#39;&quot; + cfg[&#39;db&#39;][&#39;schema&#39;] + &quot;&#39;order by viewname;&quot;tables = sql_query(query)  ---------------------------------------------------------------------------NameError                 Traceback (most recent call last)&lt;ipython-input-3-595ef2f020fb&gt; in &lt;module&gt;   1 # get tables in schema----&gt; 2 query = &#34;select viewname from pg_catalog. pg_views where schemaname = &#39;&#34; + cfg[&#39;db&#39;][&#39;schema&#39;] + &#34;&#39;order by viewname;&#34;   3 tables = sql_query(query)NameError: name &#39;cfg&#39; is not defined        # loop &amp; process tablesfor t in tables:    print(&#39;processing&#39;,t[0])    # get table columns  query = &quot;select column_name from information_schema. columns where table_schema = &#39;&quot; + cfg[&#39;db&#39;][&#39;schema&#39;] + &quot;&#39; and table_name = &#39;&quot; + t[0] + &quot;&#39; order by ordinal_position;&quot;  result = sql_query(query)  table_columns = [t[0] for t in result] # convert tuples to list    # get table data  query = &quot;select * from &quot; + cfg[&#39;db&#39;][&#39;schema&#39;] + &quot;. &quot; + t[0] + &quot; where report_date &gt;= &#39;2019-12-01&#39;&quot;  table_data = sql_query(query)    # create df  df = pd. DataFrame(table_data,columns=table_columns)    # save df  df. to_csv(&#39;data/&#39; + cfg[&#39;db&#39;][&#39;schema&#39;] + &#39;. &#39; + t[0] + &#39;. csv&#39;, index=False)  print(&#39;complete&#39;)  ---------------------------------------------------------------------------NameError                 Traceback (most recent call last)&lt;ipython-input-4-7185b5a96296&gt; in &lt;module&gt;   1 # loop &amp; process tables   2 ----&gt; 3 for t in tables:   4    5   print(&#39;processing&#39;,t[0])NameError: name &#39;tables&#39; is not defined  "
    }, {
    "id": 5,
    "url": "https://jefedigital.github.io/fastpages/markdown/2020/01/14/test-markdown-post.html",
    "title": "Example Markdown Post",
    "body": "2020/01/14 - Basic setup: Jekyll requires blog post files to be named according to the following format: YEAR-MONTH-DAY-filename. md Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and filename is whatever file name you choose, to remind yourself what this post is about. . md is the file extension for markdown files. The first line of the file should start with a single hash character, then a space, then your title. This is how you create a “level 1 heading” in markdown. Then you can create level 2, 3, etc headings as you wish but repeating the hash character, such as you see in the line ## File names above. Basic formatting: You can use italics, bold, code font text, and create links. Here’s a footnote 1. Here’s a horizontal rule: Lists: Here’s a list:  item 1 item 2And a numbered list:  item 1 item 2Boxes and stuff:  This is a quotation    You can include alert boxes…and…    You can include info boxesImages: Code: General preformatted text: # Do a thingdo_thing()Python code and output: # Prints '2'print(1+1)2Tables:       Column 1   Column 2         A thing   Another thing   Tweetcards: Altair 4. 0 is released! https://t. co/PCyrIOTcvvTry it with: pip install -U altairThe full list of changes is at https://t. co/roXmzcsT58 . . . read on for some highlights. pic. twitter. com/vWJ0ZveKbZ &mdash; Jake VanderPlas (@jakevdp) December 11, 2019Footnotes:       This is the footnote.  &#8617;    "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}