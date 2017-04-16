var React = require('react')
var ReactDOM = require('react-dom')

var Hello = React.createClass ({
    render: function() {
	return (<h3>
		Hello! This is REACT speaking!
		</h3>
	      )
    }
})

ReactDOM.render(<Hello />,
document.getElementById('container'))
