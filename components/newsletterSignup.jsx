const styles = {
  displayNone: {
  	display: 'none'
  },
  shifted: {
  	position: 'absolute',
  	left: '-5000px'
  }
};

NewsletterSignup = React.createClass({

	getInitialState() {
		return {
			emailInput: ""
		}
	},

	chimpScripts() {
		jQuery.getScript( "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js" ).done(function( script, textStatus ) {
			console.log( textStatus );
			return (function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';}(jQuery));var $mcj = jQuery.noConflict(true);
		}).fail(function( jqxhr, settings, exception ) {
			console.log( exception );
			return;
		});
	},

	onChangeEmail(e){this.setState({emailInput: e.target.value});},

    render() {
        return(
            <div>
            	<h3>Want Updates?</h3>
				<div id="mc_embed_signup">
				<form action="//saltea.us15.list-manage.com/subscribe/post?u=5d5b77745fe2a9906d9f92d95&amp;id=ed6f4004a9" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
				    <div id="mc_embed_signup_scroll">
						<div className="mc-field-group">
							<label for="mce-EMAIL">Email Address </label>
							<input type="email" value={this.state.emailInput} name="EMAIL" className="form-control required email" id="mce-EMAIL" onChange={this.onChangeEmail}></input>
						</div>
						<div id="mce-responses" className="clear">
							<div className="response" id="mce-error-response" style={styles.displayNone}></div>
							<div className="response" id="mce-success-response" style={styles.displayNone}></div>
						</div>
					    <div style={styles.shifted} aria-hidden="true"><input type="text" name="b_5d5b77745fe2a9906d9f92d95_ed6f4004a9" tabindex="-1" value=""></input></div>
					    <div className="clear">
					    	<input type="submit" value="Subscribe" name="subscribe" className="btn btn-primary"></input>
					    </div>
				    </div>
				</form>
				</div>
				{this.chimpScripts()}
            </div>
        );
    }
});
