var React = require('react');

var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>ScenicNinja</title>
          <link rel="stylesheet" href="./css/app.css" media="screen" title="no title" charset="utf-8" />
          <link rel="stylesheet" href="./css/simple-line-icons.css" media="screen" title="no title" charset="utf-8" />
          <link rel="stylesheet" href="./css/simple-grid.css" media="screen" title="no title" charset="utf-8" />
          <link rel="stylesheet" href="./css/animate.css" media="screen" title="no title" charset="utf-8" />
          <link href="https://fonts.googleapis.com/css?family=Signika:700,400,600" rel="stylesheet" type="text/css" />
        </head>
        <body>
          <img src={this.props.avatarUrl}></img>
          <h1>{this.props.firstName} {this.props.lastName}</h1>
          <div id="app">
          </div>
          <script src="bundle.js"></script>
        </body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
