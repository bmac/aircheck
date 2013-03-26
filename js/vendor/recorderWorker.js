  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Recorderjs/recorderWorker.js at master · mattdiamond/Recorderjs · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="http://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="D2O8DdRXPJc3lvzm6gwlsdbdXAzC0MHA+NZmhPZ4bgI=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-8c237cc402e3d4bc024750691ccce4fd5eddee2e.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-ee88d6efbef561aca0105f30ff4dab9ce7762806.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-d76b58e749b52bc47a4c46620bf2c320fabe5248.js" type="text/javascript"></script>
      <script src="https://a248.e.akamai.net/assets.github.com/assets/github-bb7f1cf3919b755750f50fd96ab249e1fb4d1e84.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="51085d2927ed2208d803c8788023d35f">

        <link data-pjax-transient rel='permalink' href='/mattdiamond/Recorderjs/blob/70d393515c839f0089754522b001694005595491/recorderWorker.js'>
    <meta property="og:title" content="Recorderjs"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/mattdiamond/Recorderjs"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/85c9c2cf9e82e4be7663df11da6f16f2?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="Recorderjs - A plugin for recording/exporting the output of Web Audio API nodes"/>
    <meta property="twitter:card" content="summary"/>
    <meta property="twitter:site" content="@GitHub">
    <meta property="twitter:title" content="mattdiamond/Recorderjs"/>

    <meta name="description" content="Recorderjs - A plugin for recording/exporting the output of Web Audio API nodes" />

  <link href="https://github.com/mattdiamond/Recorderjs/commits/master.atom" rel="alternate" title="Recent Commits to Recorderjs:master" type="application/atom+xml" />

  </head>


  <body class="logged_out page-blob  vis-public env-production  ">
    <div id="wrapper">

      

      

      

      


        <div class="header header-logged-out">
          <div class="container clearfix">

            <a class="header-logo-wordmark" href="https://github.com/">
              <img alt="GitHub" class="github-logo-4x" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x.png?1360648847" />
              <img alt="GitHub" class="github-logo-4x-hover" height="30" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov7@4x-hover.png?1360648847" />
            </a>

              
<ul class="top-nav">
    <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
  <li class="search"><a href="https://github.com/search">Search</a></li>
  <li class="features"><a href="https://github.com/features">Features</a></li>
    <li class="blog"><a href="https://github.com/blog">Blog</a></li>
</ul>


            <div class="header-actions">
                <a class="button primary" href="https://github.com/signup">Sign up for free</a>
              <a class="button" href="https://github.com/login?return_to=%2Fmattdiamond%2FRecorderjs%2Fblob%2Fmaster%2FrecorderWorker.js">Sign in</a>
            </div>

          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu ">
          <div class="container">
            <div class="title-actions-bar">
              


<ul class="pagehead-actions">



    <li>
      <a href="/login?return_to=%2Fmattdiamond%2FRecorderjs"
        class="minibutton js-toggler-target star-button entice tooltipped upwards"
        title="You must be signed in to use this feature" rel="nofollow">
        <span class="mini-icon mini-icon-star"></span>Star
      </a>
      <a class="social-count js-social-count" href="/mattdiamond/Recorderjs/stargazers">
        190
      </a>
    </li>
    <li>
      <a href="/login?return_to=%2Fmattdiamond%2FRecorderjs"
        class="minibutton js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="mini-icon mini-icon-fork"></span>Fork
      </a>
      <a href="/mattdiamond/Recorderjs/network" class="social-count">
        35
      </a>
    </li>
</ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/mattdiamond" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">mattdiamond</span>
                  </a></span> /
                <strong><a href="/mattdiamond/Recorderjs" class="js-current-repository">Recorderjs</a></strong>
              </h1>
            </div>

            
  <ul class="tabs">
    <li><a href="/mattdiamond/Recorderjs" class="selected" highlight="repo_source repo_downloads repo_commits repo_tags repo_branches">Code</a></li>
    <li><a href="/mattdiamond/Recorderjs/network" highlight="repo_network">Network</a></li>
    <li><a href="/mattdiamond/Recorderjs/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>0</span></a></li>

      <li><a href="/mattdiamond/Recorderjs/issues" highlight="repo_issues">Issues <span class='counter'>6</span></a></li>



    <li><a href="/mattdiamond/Recorderjs/graphs" highlight="repo_graphs repo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/mattdiamond/Recorderjs/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter blank">0</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="select-menu js-menu-container js-select-menu js-branch-menu">
      <a class="minibutton select-menu-button js-menu-target" data-hotkey="w" data-ref="master">
        <span class="mini-icon mini-icon-branch"></span>
        <i>branch:</i>
        <span class="js-select-button">master</span>
      </a>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">

        <div class="select-menu-modal">
          <div class="select-menu-header">
            <span class="select-menu-title">Switch branches/tags</span>
            <span class="mini-icon mini-icon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-filters">
            <div class="select-menu-text-filter">
              <input type="text" id="commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
            </div>
            <div class="select-menu-tabs">
              <ul>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
                </li>
                <li class="select-menu-tab">
                  <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
                </li>
              </ul>
            </div><!-- /.select-menu-tabs -->
          </div><!-- /.select-menu-filters -->

          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="branches">

            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

                <div class="select-menu-item js-navigation-item js-navigation-target selected">
                  <span class="select-menu-item-icon mini-icon mini-icon-confirm"></span>
                  <a href="/mattdiamond/Recorderjs/blob/master/recorderWorker.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" rel="nofollow" title="master">master</a>
                </div> <!-- /.select-menu-item -->
            </div>

              <div class="select-menu-no-results">Nothing to show</div>
          </div> <!-- /.select-menu-list -->


          <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket css-truncate" data-tab-filter="tags">
            <div data-filterable-for="commitish-filter-field" data-filterable-type="substring">

            </div>

            <div class="select-menu-no-results">Nothing to show</div>

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/mattdiamond/Recorderjs" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/mattdiamond/Recorderjs/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/mattdiamond/Recorderjs/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">1</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:ef2de1f75e749b928fb5db01acaf0c86 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:ef2de1f75e749b928fb5db01acaf0c86 -->


<div id="slider">
    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

        <div class="breadcrumb">
          <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mattdiamond/Recorderjs" class="js-slide-to" data-branch="master" data-direction="back" itemscope="url"><span itemprop="title">Recorderjs</span></a></span></span><span class="separator"> / </span><strong class="final-path">recorderWorker.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="recorderWorker.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
        </div>

      <a href="/mattdiamond/Recorderjs/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>


        
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/f42ace1f6e35d42dadfe3136e498fe2b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/cwilso" rel="author">cwilso</a></span>
    <time class="js-relative-date" datetime="2012-11-19T10:55:05-08:00" title="2012-11-19 10:55:05">November 19, 2012</time>
    <div class="commit-title">
        <a href="/mattdiamond/Recorderjs/commit/86de2c2d30aece35fb81b1d8f72ecbf34e7c84b7" class="message">Fixed getBuffer() by maintaining separate L and R channels.</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="mattdiamond" href="/mattdiamond/Recorderjs/commits/master/recorderWorker.js?author=mattdiamond"><img height="20" src="https://secure.gravatar.com/avatar/85c9c2cf9e82e4be7663df11da6f16f2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="jussi-kalliokoski" href="/mattdiamond/Recorderjs/commits/master/recorderWorker.js?author=jussi-kalliokoski"><img height="20" src="https://secure.gravatar.com/avatar/c3bcb09305a87e09cc612a0918a49237?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="cwilso" href="/mattdiamond/Recorderjs/commits/master/recorderWorker.js?author=cwilso"><img height="20" src="https://secure.gravatar.com/avatar/f42ace1f6e35d42dadfe3136e498fe2b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="thomasboyt" href="/mattdiamond/Recorderjs/commits/master/recorderWorker.js?author=thomasboyt"><img height="20" src="https://secure.gravatar.com/avatar/84ef853d16e9ed49e6808d7b024c064c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2>Users on GitHub who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/85c9c2cf9e82e4be7663df11da6f16f2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/mattdiamond">mattdiamond</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/c3bcb09305a87e09cc612a0918a49237?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/jussi-kalliokoski">jussi-kalliokoski</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/f42ace1f6e35d42dadfe3136e498fe2b?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/cwilso">cwilso</a>
        </li>
        <li>
          <img height="24" src="https://secure.gravatar.com/avatar/84ef853d16e9ed49e6808d7b024c064c?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/thomasboyt">thomasboyt</a>
        </li>
      </ul>
    </div>
  </div>


    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/mattdiamond/Recorderjs/blob/70d393515c839f0089754522b001694005595491/recorderWorker.js" data-title="Recorderjs/recorderWorker.js at master · mattdiamond/Recorderjs · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>132 lines (114 sloc)</span>
                <span>3.17 kb</span>
              </div>
              <div class="actions">
                <div class="button-group">
                      <a class="minibutton js-entice" href=""
                         data-entice="You must be signed in and on a branch to make or propose changes">Edit</a>
                  <a href="/mattdiamond/Recorderjs/raw/master/recorderWorker.js" class="button minibutton " id="raw-url">Raw</a>
                    <a href="/mattdiamond/Recorderjs/blame/master/recorderWorker.js" class="button minibutton ">Blame</a>
                  <a href="/mattdiamond/Recorderjs/commits/master/recorderWorker.js" class="button minibutton " rel="nofollow">History</a>
                </div><!-- /.button-group -->
              </div><!-- /.actions -->

            </div>
                <div class="data type-javascript js-blob-data">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
</pre>
          </td>
          <td width="100%">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="kd">var</span> <span class="nx">recLength</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC2'>&nbsp;&nbsp;<span class="nx">recBuffersL</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC3'>&nbsp;&nbsp;<span class="nx">recBuffersR</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC4'>&nbsp;&nbsp;<span class="nx">sampleRate</span><span class="p">;</span></div><div class='line' id='LC5'><br/></div><div class='line' id='LC6'><span class="k">this</span><span class="p">.</span><span class="nx">onmessage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">){</span></div><div class='line' id='LC7'>&nbsp;&nbsp;<span class="k">switch</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">command</span><span class="p">){</span></div><div class='line' id='LC8'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;init&#39;</span><span class="o">:</span></div><div class='line' id='LC9'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">init</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">config</span><span class="p">);</span></div><div class='line' id='LC10'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC11'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;record&#39;</span><span class="o">:</span></div><div class='line' id='LC12'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">record</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">buffer</span><span class="p">);</span></div><div class='line' id='LC13'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC14'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;exportWAV&#39;</span><span class="o">:</span></div><div class='line' id='LC15'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">exportWAV</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">data</span><span class="p">.</span><span class="nx">type</span><span class="p">);</span></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;getBuffer&#39;</span><span class="o">:</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">getBuffer</span><span class="p">();</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC20'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;clear&#39;</span><span class="o">:</span></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">clear</span><span class="p">();</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC23'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC24'><span class="p">};</span></div><div class='line' id='LC25'><br/></div><div class='line' id='LC26'><span class="kd">function</span> <span class="nx">init</span><span class="p">(</span><span class="nx">config</span><span class="p">){</span></div><div class='line' id='LC27'>&nbsp;&nbsp;<span class="nx">sampleRate</span> <span class="o">=</span> <span class="nx">config</span><span class="p">.</span><span class="nx">sampleRate</span><span class="p">;</span></div><div class='line' id='LC28'><span class="p">}</span></div><div class='line' id='LC29'><br/></div><div class='line' id='LC30'><span class="kd">function</span> <span class="nx">record</span><span class="p">(</span><span class="nx">inputBuffer</span><span class="p">){</span></div><div class='line' id='LC31'>&nbsp;&nbsp;<span class="nx">recBuffersL</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">inputBuffer</span><span class="p">[</span><span class="mi">0</span><span class="p">]);</span></div><div class='line' id='LC32'>&nbsp;&nbsp;<span class="nx">recBuffersR</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">inputBuffer</span><span class="p">[</span><span class="mi">1</span><span class="p">]);</span></div><div class='line' id='LC33'>&nbsp;&nbsp;<span class="nx">recLength</span> <span class="o">+=</span> <span class="nx">inputBuffer</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC34'><span class="p">}</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'><span class="kd">function</span> <span class="nx">exportWAV</span><span class="p">(</span><span class="nx">type</span><span class="p">){</span></div><div class='line' id='LC37'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bufferL</span> <span class="o">=</span> <span class="nx">mergeBuffers</span><span class="p">(</span><span class="nx">recBuffersL</span><span class="p">,</span> <span class="nx">recLength</span><span class="p">);</span></div><div class='line' id='LC38'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bufferR</span> <span class="o">=</span> <span class="nx">mergeBuffers</span><span class="p">(</span><span class="nx">recBuffersR</span><span class="p">,</span> <span class="nx">recLength</span><span class="p">);</span></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">interleaved</span> <span class="o">=</span> <span class="nx">interleave</span><span class="p">(</span><span class="nx">bufferL</span><span class="p">,</span> <span class="nx">bufferR</span><span class="p">);</span></div><div class='line' id='LC40'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">dataview</span> <span class="o">=</span> <span class="nx">encodeWAV</span><span class="p">(</span><span class="nx">interleaved</span><span class="p">);</span></div><div class='line' id='LC41'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">audioBlob</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Blob</span><span class="p">([</span><span class="nx">dataview</span><span class="p">],</span> <span class="p">{</span> <span class="nx">type</span><span class="o">:</span> <span class="nx">type</span> <span class="p">});</span></div><div class='line' id='LC42'><br/></div><div class='line' id='LC43'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">postMessage</span><span class="p">(</span><span class="nx">audioBlob</span><span class="p">);</span></div><div class='line' id='LC44'><span class="p">}</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'><span class="kd">function</span> <span class="nx">getBuffer</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">buffers</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="nx">buffers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">mergeBuffers</span><span class="p">(</span><span class="nx">recBuffersL</span><span class="p">,</span> <span class="nx">recLength</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC49'>&nbsp;&nbsp;<span class="nx">buffers</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="nx">mergeBuffers</span><span class="p">(</span><span class="nx">recBuffersR</span><span class="p">,</span> <span class="nx">recLength</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC50'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">postMessage</span><span class="p">(</span><span class="nx">buffers</span><span class="p">);</span></div><div class='line' id='LC51'><span class="p">}</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'><span class="kd">function</span> <span class="nx">clear</span><span class="p">(){</span></div><div class='line' id='LC54'>&nbsp;&nbsp;<span class="nx">recLength</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC55'>&nbsp;&nbsp;<span class="nx">recBuffersL</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC56'>&nbsp;&nbsp;<span class="nx">recBuffersR</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC57'><span class="p">}</span></div><div class='line' id='LC58'><br/></div><div class='line' id='LC59'><span class="kd">function</span> <span class="nx">mergeBuffers</span><span class="p">(</span><span class="nx">recBuffers</span><span class="p">,</span> <span class="nx">recLength</span><span class="p">){</span></div><div class='line' id='LC60'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Float32Array</span><span class="p">(</span><span class="nx">recLength</span><span class="p">);</span></div><div class='line' id='LC61'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">offset</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC62'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">recBuffers</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">set</span><span class="p">(</span><span class="nx">recBuffers</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">offset</span><span class="p">);</span></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">offset</span> <span class="o">+=</span> <span class="nx">recBuffers</span><span class="p">[</span><span class="nx">i</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC65'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC66'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC67'><span class="p">}</span></div><div class='line' id='LC68'><br/></div><div class='line' id='LC69'><span class="kd">function</span> <span class="nx">interleave</span><span class="p">(</span><span class="nx">inputL</span><span class="p">,</span> <span class="nx">inputR</span><span class="p">){</span></div><div class='line' id='LC70'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">inputL</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="nx">inputR</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Float32Array</span><span class="p">(</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">inputIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC75'><br/></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">index</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">){</span></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">index</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">inputL</span><span class="p">[</span><span class="nx">inputIndex</span><span class="p">];</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">[</span><span class="nx">index</span><span class="o">++</span><span class="p">]</span> <span class="o">=</span> <span class="nx">inputR</span><span class="p">[</span><span class="nx">inputIndex</span><span class="p">];</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">inputIndex</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC80'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC81'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">;</span></div><div class='line' id='LC82'><span class="p">}</span></div><div class='line' id='LC83'><br/></div><div class='line' id='LC84'><span class="kd">function</span> <span class="nx">floatTo16BitPCM</span><span class="p">(</span><span class="nx">output</span><span class="p">,</span> <span class="nx">offset</span><span class="p">,</span> <span class="nx">input</span><span class="p">){</span></div><div class='line' id='LC85'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">input</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">,</span> <span class="nx">offset</span><span class="o">+=</span><span class="mi">2</span><span class="p">){</span></div><div class='line' id='LC86'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">max</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">min</span><span class="p">(</span><span class="mi">1</span><span class="p">,</span> <span class="nx">input</span><span class="p">[</span><span class="nx">i</span><span class="p">]));</span></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">output</span><span class="p">.</span><span class="nx">setInt16</span><span class="p">(</span><span class="nx">offset</span><span class="p">,</span> <span class="nx">s</span> <span class="o">&lt;</span> <span class="mi">0</span> <span class="o">?</span> <span class="nx">s</span> <span class="o">*</span> <span class="mh">0x8000</span> <span class="o">:</span> <span class="nx">s</span> <span class="o">*</span> <span class="mh">0x7FFF</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC88'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC89'><span class="p">}</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'><span class="kd">function</span> <span class="nx">writeString</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="nx">offset</span><span class="p">,</span> <span class="nx">string</span><span class="p">){</span></div><div class='line' id='LC92'>&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">string</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">){</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">view</span><span class="p">.</span><span class="nx">setUint8</span><span class="p">(</span><span class="nx">offset</span> <span class="o">+</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">string</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="nx">i</span><span class="p">));</span></div><div class='line' id='LC94'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC95'><span class="p">}</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'><span class="kd">function</span> <span class="nx">encodeWAV</span><span class="p">(</span><span class="nx">samples</span><span class="p">){</span></div><div class='line' id='LC98'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">buffer</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">ArrayBuffer</span><span class="p">(</span><span class="mi">44</span> <span class="o">+</span> <span class="nx">samples</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">2</span><span class="p">);</span></div><div class='line' id='LC99'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">view</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">DataView</span><span class="p">(</span><span class="nx">buffer</span><span class="p">);</span></div><div class='line' id='LC100'><br/></div><div class='line' id='LC101'>&nbsp;&nbsp;<span class="cm">/* RIFF identifier */</span></div><div class='line' id='LC102'>&nbsp;&nbsp;<span class="nx">writeString</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="s1">&#39;RIFF&#39;</span><span class="p">);</span></div><div class='line' id='LC103'>&nbsp;&nbsp;<span class="cm">/* file length */</span></div><div class='line' id='LC104'>&nbsp;&nbsp;<span class="nx">view</span><span class="p">.</span><span class="nx">setUint32</span><span class="p">(</span><span class="mi">4</span><span class="p">,</span> <span class="mi">32</span> <span class="o">+</span> <span class="nx">samples</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">2</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="cm">/* RIFF type */</span></div><div class='line' id='LC106'>&nbsp;&nbsp;<span class="nx">writeString</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="mi">8</span><span class="p">,</span> <span class="s1">&#39;WAVE&#39;</span><span class="p">);</span></div><div class='line' id='LC107'>&nbsp;&nbsp;<span class="cm">/* format chunk identifier */</span></div><div class='line' id='LC108'>&nbsp;&nbsp;<span class="nx">writeString</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="mi">12</span><span class="p">,</span> <span class="s1">&#39;fmt &#39;</span><span class="p">);</span></div><div class='line' id='LC109'>&nbsp;&nbsp;<span class="cm">/* format chunk length */</span></div><div class='line' id='LC110'>&nbsp;&nbsp;<span class="nx">view</span><span class="p">.</span><span class="nx">setUint32</span><span class="p">(</span><span class="mi">16</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC111'>&nbsp;&nbsp;<span class="cm">/* sample format (raw) */</span></div><div class='line' id='LC112'>&nbsp;&nbsp;<span class="nx">view</span><span class="p">.</span><span class="nx">setUint16</span><span class="p">(</span><span class="mi">20</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC113'>&nbsp;&nbsp;<span class="cm">/* channel count */</span></div><div class='line' id='LC114'>&nbsp;&nbsp;<span class="nx">view</span><span class="p">.</span><span class="nx">setUint16</span><span class="p">(</span><span class="mi">22</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC115'>&nbsp;&nbsp;<span class="cm">/* sample rate */</span></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="nx">view</span><span class="p">.</span><span class="nx">setUint32</span><span class="p">(</span><span class="mi">24</span><span class="p">,</span> <span class="nx">sampleRate</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC117'>&nbsp;&nbsp;<span class="cm">/* byte rate (sample rate * block align) */</span></div><div class='line' id='LC118'>&nbsp;&nbsp;<span class="nx">view</span><span class="p">.</span><span class="nx">setUint32</span><span class="p">(</span><span class="mi">28</span><span class="p">,</span> <span class="nx">sampleRate</span> <span class="o">*</span> <span class="mi">4</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC119'>&nbsp;&nbsp;<span class="cm">/* block align (channel count * bytes per sample) */</span></div><div class='line' id='LC120'>&nbsp;&nbsp;<span class="nx">view</span><span class="p">.</span><span class="nx">setUint16</span><span class="p">(</span><span class="mi">32</span><span class="p">,</span> <span class="mi">4</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC121'>&nbsp;&nbsp;<span class="cm">/* bits per sample */</span></div><div class='line' id='LC122'>&nbsp;&nbsp;<span class="nx">view</span><span class="p">.</span><span class="nx">setUint16</span><span class="p">(</span><span class="mi">34</span><span class="p">,</span> <span class="mi">16</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC123'>&nbsp;&nbsp;<span class="cm">/* data chunk identifier */</span></div><div class='line' id='LC124'>&nbsp;&nbsp;<span class="nx">writeString</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="mi">36</span><span class="p">,</span> <span class="s1">&#39;data&#39;</span><span class="p">);</span></div><div class='line' id='LC125'>&nbsp;&nbsp;<span class="cm">/* data chunk length */</span></div><div class='line' id='LC126'>&nbsp;&nbsp;<span class="nx">view</span><span class="p">.</span><span class="nx">setUint32</span><span class="p">(</span><span class="mi">40</span><span class="p">,</span> <span class="nx">samples</span><span class="p">.</span><span class="nx">length</span> <span class="o">*</span> <span class="mi">2</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>&nbsp;&nbsp;<span class="nx">floatTo16BitPCM</span><span class="p">(</span><span class="nx">view</span><span class="p">,</span> <span class="mi">44</span><span class="p">,</span> <span class="nx">samples</span><span class="p">);</span></div><div class='line' id='LC129'><br/></div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">view</span><span class="p">;</span></div><div class='line' id='LC131'><span class="p">}</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>

        <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
        <div id="jump-to-line" style="display:none">
          <h2>Jump to Line</h2>
          <form accept-charset="UTF-8" class="js-jump-to-line-form">
            <input class="textfield js-jump-to-line-field" type="text">
            <div class="full-button">
              <button type="submit" class="button">Go</button>
            </div>
          </form>
        </div>

      </div>
    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1360648847" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.04352s from fe4.rs.github.com">GitHub</span>, Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/mattdiamond/Recorderjs/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-icon mega-icon-normalscreen"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="mini-icon mini-icon-brightness"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.04392' data-host='fe4'></span>
    
  </body>
</html>

