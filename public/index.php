<!doctype html>
<html>
  <head>
    <title>jQuery height plugin</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <style>
#header {
    height:100px;
    background-color:yellow;
}
#content {
    padding:20px 0;
}
#footer {
    height:50px;
    background-color:yellow;
    clear:both;
}
#panelGroup .column {
    width:50%;
    float:left;
    display:block;
}
#panelLeft .content {
    background-color:#DDD;
    min-height:20px;
}
#panelRight .content {
    background-color:#DDD;
    min-height:20px;
}
#search {
    background-color:#CCC;
}
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.0/jquery.min.js"></script>
    <script src="js/jquery.maxheight.js"></script>
    <script>
jQuery(document).ready(function($) {
    $('#panelGroup .content').maxheight();
});
    </script>
  </head>
  <body>
      <div id="header">
          Header
      </div>
      <div id="content">
          Content
          <div id="panelGroup">
              <div class="column" id="panelLeft">
                <div id="search">Search</div>
                <div class="content">

                </div>
              </div>
              <div class="column" id="panelRight">
                  <div class="content">
                  </div>
              </div>
          </div>
      </div>
      <div id="footer">
          Footer
      </div>
  </body>
</html>