# calorie-assignment
calculates the total calorie taken by user . Backend on nodejs and front end on react js 

![Capture](/Capture.PNG)

POST-MAN-COLLECTION
https://go.postman.co/workspace/My-Workspace~e638923d-4420-41d8-876f-bf5fc36b42ab/collection/6297340-5e067a59-f983-49b8-adb1-f965cf19beb2

meal collection description.
POST

http://localhost:8009/v1/user/signup

Bodyraw (json)
json
{
  "firstName": "John",
  "lastName": "Doe",
  "password": "Admin@123",
  "email": "john@yahoo.com"
}


POST

http://localhost:8009/v1/user/login

Bodyraw (json)
json
{
  "email": "john@yahoo.com",
  "password": "Admin@123"
}
GET
http://localhost:8009/v1/user


Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTczMGUwMGI0MzBhNjA0MDE4ZTJjZGYiLCJpYXQiOjE2MzQ5MzAyOTgsImV4cCI6MTYzNDkzMzg5OH0.uJJdiGYCNWZnsrfFbOmJCiKnbWg5My1JdrV6iplQuto

POST

http://localhost:8009/v1/meal

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTczMGUwMGI0MzBhNjA0MDE4ZTJjZGYiLCJpYXQiOjE2MzQ5MzAyOTgsImV4cCI6MTYzNDkzMzg5OH0.uJJdiGYCNWZnsrfFbOmJCiKnbWg5My1JdrV6iplQuto
Bodyraw (json)
json
{
  "calorie": 20,
  "text": "rice"
}

GET
http://localhost:8009/v1/meal


Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTczMGUwMGI0MzBhNjA0MDE4ZTJjZGYiLCJpYXQiOjE2MzQ5MzQ4MTEsImV4cCI6MTYzNDkzODQxMX0.ch5vLE_K1VMIwqNFw8yr3aHhQagNlht_vAjXFNb42FY

GET

http://localhost:8009/v1/meal/617454d86e8a58b9075022d0
Make things easier for your teammates with a complete request description.
Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc0MTZlZDExNWFiODNlNjQyNzBmMzMiLCJpYXQiOjE2MzUwMjM2NjksImV4cCI6MTYzNTAyNzI2OX0.6Pk7UaLdgL2-Bj8BZAvh9-jPWAcwI6cNDLLKgLswrX0

DEL

http://localhost:8009/v1/meal/617454d86e8a58b9075022d0

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc0MTZlZDExNWFiODNlNjQyNzBmMzMiLCJpYXQiOjE2MzUwMjM2NjksImV4cCI6MTYzNTAyNzI2OX0.6Pk7UaLdgL2-Bj8BZAvh9-jPWAcwI6cNDLLKgLswrX0
PUT

http://localhost:8009/v1/meal/61747b4626de6b81b1f2a6af

Request Headers
Authorization
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTc0MTZlZDExNWFiODNlNjQyNzBmMzMiLCJpYXQiOjE2MzUwMjMxNDIsImV4cCI6MTYzNTAyNjc0Mn0.WiePryTWcwbzuiKrBgFEmJ5FIQYQ7OpPPwsyl-b5S_E
Bodyraw (json)
json

{
  "calorie": 1200,
  "text": "strawberry"
}


Project structure 

-- undefined
    |-- Capture.PNG
    |-- README.md
    |-- client
    |   |-- .editorconfig
    |   |-- .gitignore
    |   |-- package-lock.json
    |   |-- package.json
    |   |-- yarn.lock
    |   |-- public
    |   |   |-- favicon.ico
    |   |   |-- index.html
    |   |   |-- manifest.json
    |   |-- src
    |       |-- App.css
    |       |-- App.js
    |       |-- App.test.js
    |       |-- index.css
    |       |-- index.js
    |       |-- logo.svg
    |       |-- serviceWorker.js
    |       |-- assets
    |       |   |-- css
    |       |   |   |-- sb-admin.css
    |       |   |   |-- sb-admin.min.css
    |       |   |-- js
    |       |   |   |-- sb-admin.js
    |       |   |   |-- sb-admin.min.js
    |       |   |-- scss
    |       |   |   |-- sb-admin.scss
    |       |   |   |-- _cards.scss
    |       |   |   |-- _footer.scss
    |       |   |   |-- _global.scss
    |       |   |   |-- _login.scss
    |       |   |   |-- _mixins.scss
    |       |   |   |-- _navbar.scss
    |       |   |   |-- _utilities.scss
    |       |   |   |-- _variables.scss
    |       |   |-- vendor
    |       |       |-- bootstrap
    |       |       |   |-- js
    |       |       |   |   |-- bootstrap.bundle.js
    |       |       |   |   |-- bootstrap.bundle.js.map
    |       |       |   |   |-- bootstrap.bundle.min.js
    |       |       |   |   |-- bootstrap.bundle.min.js.map
    |       |       |   |   |-- bootstrap.js
    |       |       |   |   |-- bootstrap.js.map
    |       |       |   |   |-- bootstrap.min.js
    |       |       |   |   |-- bootstrap.min.js.map
    |       |       |   |-- scss
    |       |       |       |-- bootstrap-grid.scss
    |       |       |       |-- bootstrap-reboot.scss
    |       |       |       |-- bootstrap.scss
    |       |       |       |-- _alert.scss
    |       |       |       |-- _badge.scss
    |       |       |       |-- _breadcrumb.scss
    |       |       |       |-- _button-group.scss
    |       |       |       |-- _buttons.scss
    |       |       |       |-- _card.scss
    |       |       |       |-- _carousel.scss
    |       |       |       |-- _close.scss
    |       |       |       |-- _code.scss
    |       |       |       |-- _custom-forms.scss
    |       |       |       |-- _dropdown.scss
    |       |       |       |-- _forms.scss
    |       |       |       |-- _functions.scss
    |       |       |       |-- _grid.scss
    |       |       |       |-- _images.scss
    |       |       |       |-- _input-group.scss
    |       |       |       |-- _jumbotron.scss
    |       |       |       |-- _list-group.scss
    |       |       |       |-- _media.scss
    |       |       |       |-- _mixins.scss
    |       |       |       |-- _modal.scss
    |       |       |       |-- _nav.scss
    |       |       |       |-- _navbar.scss
    |       |       |       |-- _pagination.scss
    |       |       |       |-- _popover.scss
    |       |       |       |-- _print.scss
    |       |       |       |-- _progress.scss
    |       |       |       |-- _reboot.scss
    |       |       |       |-- _root.scss
    |       |       |       |-- _spinners.scss
    |       |       |       |-- _tables.scss
    |       |       |       |-- _toasts.scss
    |       |       |       |-- _tooltip.scss
    |       |       |       |-- _transitions.scss
    |       |       |       |-- _type.scss
    |       |       |       |-- _utilities.scss
    |       |       |       |-- _variables.scss
    |       |       |       |-- mixins
    |       |       |       |   |-- _alert.scss
    |       |       |       |   |-- _background-variant.scss
    |       |       |       |   |-- _badge.scss
    |       |       |       |   |-- _border-radius.scss
    |       |       |       |   |-- _box-shadow.scss
    |       |       |       |   |-- _breakpoints.scss
    |       |       |       |   |-- _buttons.scss
    |       |       |       |   |-- _caret.scss
    |       |       |       |   |-- _clearfix.scss
    |       |       |       |   |-- _deprecate.scss
    |       |       |       |   |-- _float.scss
    |       |       |       |   |-- _forms.scss
    |       |       |       |   |-- _gradients.scss
    |       |       |       |   |-- _grid-framework.scss
    |       |       |       |   |-- _grid.scss
    |       |       |       |   |-- _hover.scss
    |       |       |       |   |-- _image.scss
    |       |       |       |   |-- _list-group.scss
    |       |       |       |   |-- _lists.scss
    |       |       |       |   |-- _nav-divider.scss
    |       |       |       |   |-- _pagination.scss
    |       |       |       |   |-- _reset-text.scss
    |       |       |       |   |-- _resize.scss
    |       |       |       |   |-- _screen-reader.scss
    |       |       |       |   |-- _size.scss
    |       |       |       |   |-- _table-row.scss
    |       |       |       |   |-- _text-emphasis.scss
    |       |       |       |   |-- _text-hide.scss
    |       |       |       |   |-- _text-truncate.scss
    |       |       |       |   |-- _transition.scss
    |       |       |       |   |-- _visibility.scss
    |       |       |       |-- utilities
    |       |       |       |   |-- _align.scss
    |       |       |       |   |-- _background.scss
    |       |       |       |   |-- _borders.scss
    |       |       |       |   |-- _clearfix.scss
    |       |       |       |   |-- _display.scss
    |       |       |       |   |-- _embed.scss
    |       |       |       |   |-- _flex.scss
    |       |       |       |   |-- _float.scss
    |       |       |       |   |-- _overflow.scss
    |       |       |       |   |-- _position.scss
    |       |       |       |   |-- _screenreaders.scss
    |       |       |       |   |-- _shadows.scss
    |       |       |       |   |-- _sizing.scss
    |       |       |       |   |-- _spacing.scss
    |       |       |       |   |-- _stretched-link.scss
    |       |       |       |   |-- _text.scss
    |       |       |       |   |-- _visibility.scss
    |       |       |       |-- vendor
    |       |       |           |-- _rfs.scss
    |       |       |-- chart.js
    |       |       |   |-- Chart.bundle.js
    |       |       |   |-- Chart.bundle.min.js
    |       |       |   |-- Chart.js
    |       |       |   |-- Chart.min.js
    |       |       |-- datatables
    |       |       |   |-- dataTables.bootstrap4.css
    |       |       |   |-- dataTables.bootstrap4.js
    |       |       |   |-- dataTables.bootstrap4.min.css
    |       |       |   |-- dataTables.bootstrap4.min.js
    |       |       |   |-- jquery.dataTables.js
    |       |       |   |-- jquery.dataTables.min.js
    |       |       |-- fontawesome-free
    |       |       |   |-- LICENSE.txt
    |       |       |   |-- package.json
    |       |       |   |-- css
    |       |       |   |   |-- all.css
    |       |       |   |   |-- all.min.css
    |       |       |   |   |-- brands.css
    |       |       |   |   |-- brands.min.css
    |       |       |   |   |-- fontawesome.css
    |       |       |   |   |-- fontawesome.min.css
    |       |       |   |   |-- regular.css
    |       |       |   |   |-- regular.min.css
    |       |       |   |   |-- solid.css
    |       |       |   |   |-- solid.min.css
    |       |       |   |   |-- svg-with-js.css
    |       |       |   |   |-- svg-with-js.min.css
    |       |       |   |   |-- v4-shims.css
    |       |       |   |   |-- v4-shims.min.css
    |       |       |   |-- js
    |       |       |   |   |-- all.js
    |       |       |   |   |-- all.min.js
    |       |       |   |   |-- brands.js
    |       |       |   |   |-- brands.min.js
    |       |       |   |   |-- fontawesome.js
    |       |       |   |   |-- fontawesome.min.js
    |       |       |   |   |-- regular.js
    |       |       |   |   |-- regular.min.js
    |       |       |   |   |-- solid.js
    |       |       |   |   |-- solid.min.js
    |       |       |   |   |-- v4-shims.js
    |       |       |   |   |-- v4-shims.min.js
    |       |       |   |-- less
    |       |       |   |   |-- brands.less
    |       |       |   |   |-- fontawesome.less
    |       |       |   |   |-- regular.less
    |       |       |   |   |-- solid.less
    |       |       |   |   |-- v4-shims.less
    |       |       |   |   |-- _animated.less
    |       |       |   |   |-- _bordered-pulled.less
    |       |       |   |   |-- _core.less
    |       |       |   |   |-- _fixed-width.less
    |       |       |   |   |-- _icons.less
    |       |       |   |   |-- _larger.less
    |       |       |   |   |-- _list.less
    |       |       |   |   |-- _mixins.less
    |       |       |   |   |-- _rotated-flipped.less
    |       |       |   |   |-- _screen-reader.less
    |       |       |   |   |-- _shims.less
    |       |       |   |   |-- _stacked.less
    |       |       |   |   |-- _variables.less
    |       |       |   |-- scss
    |       |       |   |   |-- brands.scss
    |       |       |   |   |-- fontawesome.scss
    |       |       |   |   |-- regular.scss
    |       |       |   |   |-- solid.scss
    |       |       |   |   |-- v4-shims.scss
    |       |       |   |   |-- _animated.scss
    |       |       |   |   |-- _bordered-pulled.scss
    |       |       |   |   |-- _core.scss
    |       |       |   |   |-- _fixed-width.scss
    |       |       |   |   |-- _icons.scss
    |       |       |   |   |-- _larger.scss
    |       |       |   |   |-- _list.scss
    |       |       |   |   |-- _mixins.scss
    |       |       |   |   |-- _rotated-flipped.scss
    |       |       |   |   |-- _screen-reader.scss
    |       |       |   |   |-- _shims.scss
    |       |       |   |   |-- _stacked.scss
    |       |       |   |   |-- _variables.scss
    |       |       |   |-- sprites
    |       |       |   |   |-- brands.svg
    |       |       |   |   |-- regular.svg
    |       |       |   |   |-- solid.svg
    |       |       |   |-- svgs
    |       |       |   |   |-- brands
    |       |       |   |   |   |-- 500px.svg
    |       |       |   |   |   |-- accessible-icon.svg
    |       |       |   |   |   |-- accusoft.svg
    |       |       |   |   |   |-- acquisitions-incorporated.svg
    |       |       |   |   |   |-- adn.svg
    |       |       |   |   |   |-- adobe.svg
    |       |       |   |   |   |-- adversal.svg
    |       |       |   |   |   |-- affiliatetheme.svg
    |       |       |   |   |   |-- airbnb.svg
    |       |       |   |   |   |-- algolia.svg
    |       |       |   |   |   |-- alipay.svg
    |       |       |   |   |   |-- amazon-pay.svg
    |       |       |   |   |   |-- amazon.svg
    |       |       |   |   |   |-- amilia.svg
    |       |       |   |   |   |-- android.svg
    |       |       |   |   |   |-- angellist.svg
    |       |       |   |   |   |-- angrycreative.svg
    |       |       |   |   |   |-- angular.svg
    |       |       |   |   |   |-- app-store-ios.svg
    |       |       |   |   |   |-- app-store.svg
    |       |       |   |   |   |-- apper.svg
    |       |       |   |   |   |-- apple-pay.svg
    |       |       |   |   |   |-- apple.svg
    |       |       |   |   |   |-- artstation.svg
    |       |       |   |   |   |-- asymmetrik.svg
    |       |       |   |   |   |-- atlassian.svg
    |       |       |   |   |   |-- audible.svg
    |       |       |   |   |   |-- autoprefixer.svg
    |       |       |   |   |   |-- avianex.svg
    |       |       |   |   |   |-- aviato.svg
    |       |       |   |   |   |-- aws.svg
    |       |       |   |   |   |-- bandcamp.svg
    |       |       |   |   |   |-- battle-net.svg
    |       |       |   |   |   |-- behance-square.svg
    |       |       |   |   |   |-- behance.svg
    |       |       |   |   |   |-- bimobject.svg
    |       |       |   |   |   |-- bitbucket.svg
    |       |       |   |   |   |-- bitcoin.svg
    |       |       |   |   |   |-- bity.svg
    |       |       |   |   |   |-- black-tie.svg
    |       |       |   |   |   |-- blackberry.svg
    |       |       |   |   |   |-- blogger-b.svg
    |       |       |   |   |   |-- blogger.svg
    |       |       |   |   |   |-- bluetooth-b.svg
    |       |       |   |   |   |-- bluetooth.svg
    |       |       |   |   |   |-- bootstrap.svg
    |       |       |   |   |   |-- btc.svg
    |       |       |   |   |   |-- buffer.svg
    |       |       |   |   |   |-- buromobelexperte.svg
    |       |       |   |   |   |-- buysellads.svg
    |       |       |   |   |   |-- canadian-maple-leaf.svg
    |       |       |   |   |   |-- cc-amazon-pay.svg
    |       |       |   |   |   |-- cc-amex.svg
    |       |       |   |   |   |-- cc-apple-pay.svg
    |       |       |   |   |   |-- cc-diners-club.svg
    |       |       |   |   |   |-- cc-discover.svg
    |       |       |   |   |   |-- cc-jcb.svg
    |       |       |   |   |   |-- cc-mastercard.svg
    |       |       |   |   |   |-- cc-paypal.svg
    |       |       |   |   |   |-- cc-stripe.svg
    |       |       |   |   |   |-- cc-visa.svg
    |       |       |   |   |   |-- centercode.svg
    |       |       |   |   |   |-- centos.svg
    |       |       |   |   |   |-- chrome.svg
    |       |       |   |   |   |-- chromecast.svg
    |       |       |   |   |   |-- cloudscale.svg
    |       |       |   |   |   |-- cloudsmith.svg
    |       |       |   |   |   |-- cloudversify.svg
    |       |       |   |   |   |-- codepen.svg
    |       |       |   |   |   |-- codiepie.svg
    |       |       |   |   |   |-- confluence.svg
    |       |       |   |   |   |-- connectdevelop.svg
    |       |       |   |   |   |-- contao.svg
    |       |       |   |   |   |-- cpanel.svg
    |       |       |   |   |   |-- creative-commons-by.svg
    |       |       |   |   |   |-- creative-commons-nc-eu.svg
    |       |       |   |   |   |-- creative-commons-nc-jp.svg
    |       |       |   |   |   |-- creative-commons-nc.svg
    |       |       |   |   |   |-- creative-commons-nd.svg
    |       |       |   |   |   |-- creative-commons-pd-alt.svg
    |       |       |   |   |   |-- creative-commons-pd.svg
    |       |       |   |   |   |-- creative-commons-remix.svg
    |       |       |   |   |   |-- creative-commons-sa.svg
    |       |       |   |   |   |-- creative-commons-sampling-plus.svg
    |       |       |   |   |   |-- creative-commons-sampling.svg
    |       |       |   |   |   |-- creative-commons-share.svg
    |       |       |   |   |   |-- creative-commons-zero.svg
    |       |       |   |   |   |-- creative-commons.svg
    |       |       |   |   |   |-- critical-role.svg
    |       |       |   |   |   |-- css3-alt.svg
    |       |       |   |   |   |-- css3.svg
    |       |       |   |   |   |-- cuttlefish.svg
    |       |       |   |   |   |-- d-and-d-beyond.svg
    |       |       |   |   |   |-- d-and-d.svg
    |       |       |   |   |   |-- dashcube.svg
    |       |       |   |   |   |-- delicious.svg
    |       |       |   |   |   |-- deploydog.svg
    |       |       |   |   |   |-- deskpro.svg
    |       |       |   |   |   |-- dev.svg
    |       |       |   |   |   |-- deviantart.svg
    |       |       |   |   |   |-- dhl.svg
    |       |       |   |   |   |-- diaspora.svg
    |       |       |   |   |   |-- digg.svg
    |       |       |   |   |   |-- digital-ocean.svg
    |       |       |   |   |   |-- discord.svg
    |       |       |   |   |   |-- discourse.svg
    |       |       |   |   |   |-- dochub.svg
    |       |       |   |   |   |-- docker.svg
    |       |       |   |   |   |-- draft2digital.svg
    |       |       |   |   |   |-- dribbble-square.svg
    |       |       |   |   |   |-- dribbble.svg
    |       |       |   |   |   |-- dropbox.svg
    |       |       |   |   |   |-- drupal.svg
    |       |       |   |   |   |-- dyalog.svg
    |       |       |   |   |   |-- earlybirds.svg
    |       |       |   |   |   |-- ebay.svg
    |       |       |   |   |   |-- edge.svg
    |       |       |   |   |   |-- elementor.svg
    |       |       |   |   |   |-- ello.svg
    |       |       |   |   |   |-- ember.svg
    |       |       |   |   |   |-- empire.svg
    |       |       |   |   |   |-- envira.svg
    |       |       |   |   |   |-- erlang.svg
    |       |       |   |   |   |-- ethereum.svg
    |       |       |   |   |   |-- etsy.svg
    |       |       |   |   |   |-- evernote.svg
    |       |       |   |   |   |-- expeditedssl.svg
    |       |       |   |   |   |-- facebook-f.svg
    |       |       |   |   |   |-- facebook-messenger.svg
    |       |       |   |   |   |-- facebook-square.svg
    |       |       |   |   |   |-- facebook.svg
    |       |       |   |   |   |-- fantasy-flight-games.svg
    |       |       |   |   |   |-- fedex.svg
    |       |       |   |   |   |-- fedora.svg
    |       |       |   |   |   |-- figma.svg
    |       |       |   |   |   |-- firefox.svg
    |       |       |   |   |   |-- first-order-alt.svg
    |       |       |   |   |   |-- first-order.svg
    |       |       |   |   |   |-- firstdraft.svg
    |       |       |   |   |   |-- flickr.svg
    |       |       |   |   |   |-- flipboard.svg
    |       |       |   |   |   |-- fly.svg
    |       |       |   |   |   |-- font-awesome-alt.svg
    |       |       |   |   |   |-- font-awesome-flag.svg
    |       |       |   |   |   |-- font-awesome-logo-full.svg
    |       |       |   |   |   |-- font-awesome.svg
    |       |       |   |   |   |-- fonticons-fi.svg
    |       |       |   |   |   |-- fonticons.svg
    |       |       |   |   |   |-- fort-awesome-alt.svg
    |       |       |   |   |   |-- fort-awesome.svg
    |       |       |   |   |   |-- forumbee.svg
    |       |       |   |   |   |-- foursquare.svg
    |       |       |   |   |   |-- free-code-camp.svg
    |       |       |   |   |   |-- freebsd.svg
    |       |       |   |   |   |-- fulcrum.svg
    |       |       |   |   |   |-- galactic-republic.svg
    |       |       |   |   |   |-- galactic-senate.svg
    |       |       |   |   |   |-- get-pocket.svg
    |       |       |   |   |   |-- gg-circle.svg
    |       |       |   |   |   |-- gg.svg
    |       |       |   |   |   |-- git-alt.svg
    |       |       |   |   |   |-- git-square.svg
    |       |       |   |   |   |-- git.svg
    |       |       |   |   |   |-- github-alt.svg
    |       |       |   |   |   |-- github-square.svg
    |       |       |   |   |   |-- github.svg
    |       |       |   |   |   |-- gitkraken.svg
    |       |       |   |   |   |-- gitlab.svg
    |       |       |   |   |   |-- gitter.svg
    |       |       |   |   |   |-- glide-g.svg
    |       |       |   |   |   |-- glide.svg
    |       |       |   |   |   |-- gofore.svg
    |       |       |   |   |   |-- goodreads-g.svg
    |       |       |   |   |   |-- goodreads.svg
    |       |       |   |   |   |-- google-drive.svg
    |       |       |   |   |   |-- google-play.svg
    |       |       |   |   |   |-- google-plus-g.svg
    |       |       |   |   |   |-- google-plus-square.svg
    |       |       |   |   |   |-- google-plus.svg
    |       |       |   |   |   |-- google-wallet.svg
    |       |       |   |   |   |-- google.svg
    |       |       |   |   |   |-- gratipay.svg
    |       |       |   |   |   |-- grav.svg
    |       |       |   |   |   |-- gripfire.svg
    |       |       |   |   |   |-- grunt.svg
    |       |       |   |   |   |-- gulp.svg
    |       |       |   |   |   |-- hacker-news-square.svg
    |       |       |   |   |   |-- hacker-news.svg
    |       |       |   |   |   |-- hackerrank.svg
    |       |       |   |   |   |-- hips.svg
    |       |       |   |   |   |-- hire-a-helper.svg
    |       |       |   |   |   |-- hooli.svg
    |       |       |   |   |   |-- hornbill.svg
    |       |       |   |   |   |-- hotjar.svg
    |       |       |   |   |   |-- houzz.svg
    |       |       |   |   |   |-- html5.svg
    |       |       |   |   |   |-- hubspot.svg
    |       |       |   |   |   |-- imdb.svg
    |       |       |   |   |   |-- instagram.svg
    |       |       |   |   |   |-- intercom.svg
    |       |       |   |   |   |-- internet-explorer.svg
    |       |       |   |   |   |-- invision.svg
    |       |       |   |   |   |-- ioxhost.svg
    |       |       |   |   |   |-- itch-io.svg
    |       |       |   |   |   |-- itunes-note.svg
    |       |       |   |   |   |-- itunes.svg
    |       |       |   |   |   |-- java.svg
    |       |       |   |   |   |-- jedi-order.svg
    |       |       |   |   |   |-- jenkins.svg
    |       |       |   |   |   |-- jira.svg
    |       |       |   |   |   |-- joget.svg
    |       |       |   |   |   |-- joomla.svg
    |       |       |   |   |   |-- js-square.svg
    |       |       |   |   |   |-- js.svg
    |       |       |   |   |   |-- jsfiddle.svg
    |       |       |   |   |   |-- kaggle.svg
    |       |       |   |   |   |-- keybase.svg
    |       |       |   |   |   |-- keycdn.svg
    |       |       |   |   |   |-- kickstarter-k.svg
    |       |       |   |   |   |-- kickstarter.svg
    |       |       |   |   |   |-- korvue.svg
    |       |       |   |   |   |-- laravel.svg
    |       |       |   |   |   |-- lastfm-square.svg
    |       |       |   |   |   |-- lastfm.svg
    |       |       |   |   |   |-- leanpub.svg
    |       |       |   |   |   |-- less.svg
    |       |       |   |   |   |-- line.svg
    |       |       |   |   |   |-- linkedin-in.svg
    |       |       |   |   |   |-- linkedin.svg
    |       |       |   |   |   |-- linode.svg
    |       |       |   |   |   |-- linux.svg
    |       |       |   |   |   |-- lyft.svg
    |       |       |   |   |   |-- magento.svg
    |       |       |   |   |   |-- mailchimp.svg
    |       |       |   |   |   |-- mandalorian.svg
    |       |       |   |   |   |-- markdown.svg
    |       |       |   |   |   |-- mastodon.svg
    |       |       |   |   |   |-- maxcdn.svg
    |       |       |   |   |   |-- medapps.svg
    |       |       |   |   |   |-- medium-m.svg
    |       |       |   |   |   |-- medium.svg
    |       |       |   |   |   |-- medrt.svg
    |       |       |   |   |   |-- meetup.svg
    |       |       |   |   |   |-- megaport.svg
    |       |       |   |   |   |-- mendeley.svg
    |       |       |   |   |   |-- microsoft.svg
    |       |       |   |   |   |-- mix.svg
    |       |       |   |   |   |-- mixcloud.svg
    |       |       |   |   |   |-- mizuni.svg
    |       |       |   |   |   |-- modx.svg
    |       |       |   |   |   |-- monero.svg
    |       |       |   |   |   |-- napster.svg
    |       |       |   |   |   |-- neos.svg
    |       |       |   |   |   |-- nimblr.svg
    |       |       |   |   |   |-- nintendo-switch.svg
    |       |       |   |   |   |-- node-js.svg
    |       |       |   |   |   |-- node.svg
    |       |       |   |   |   |-- npm.svg
    |       |       |   |   |   |-- ns8.svg
    |       |       |   |   |   |-- nutritionix.svg
    |       |       |   |   |   |-- odnoklassniki-square.svg
    |       |       |   |   |   |-- odnoklassniki.svg
    |       |       |   |   |   |-- old-republic.svg
    |       |       |   |   |   |-- opencart.svg
    |       |       |   |   |   |-- openid.svg
    |       |       |   |   |   |-- opera.svg
    |       |       |   |   |   |-- optin-monster.svg
    |       |       |   |   |   |-- osi.svg
    |       |       |   |   |   |-- page4.svg
    |       |       |   |   |   |-- pagelines.svg
    |       |       |   |   |   |-- palfed.svg
    |       |       |   |   |   |-- patreon.svg
    |       |       |   |   |   |-- paypal.svg
    |       |       |   |   |   |-- penny-arcade.svg
    |       |       |   |   |   |-- periscope.svg
    |       |       |   |   |   |-- phabricator.svg
    |       |       |   |   |   |-- phoenix-framework.svg
    |       |       |   |   |   |-- phoenix-squadron.svg
    |       |       |   |   |   |-- php.svg
    |       |       |   |   |   |-- pied-piper-alt.svg
    |       |       |   |   |   |-- pied-piper-hat.svg
    |       |       |   |   |   |-- pied-piper-pp.svg
    |       |       |   |   |   |-- pied-piper.svg
    |       |       |   |   |   |-- pinterest-p.svg
    |       |       |   |   |   |-- pinterest-square.svg
    |       |       |   |   |   |-- pinterest.svg
    |       |       |   |   |   |-- playstation.svg
    |       |       |   |   |   |-- product-hunt.svg
    |       |       |   |   |   |-- pushed.svg
    |       |       |   |   |   |-- python.svg
    |       |       |   |   |   |-- qq.svg
    |       |       |   |   |   |-- quinscape.svg
    |       |       |   |   |   |-- quora.svg
    |       |       |   |   |   |-- r-project.svg
    |       |       |   |   |   |-- raspberry-pi.svg
    |       |       |   |   |   |-- ravelry.svg
    |       |       |   |   |   |-- react.svg
    |       |       |   |   |   |-- reacteurope.svg
    |       |       |   |   |   |-- readme.svg
    |       |       |   |   |   |-- rebel.svg
    |       |       |   |   |   |-- red-river.svg
    |       |       |   |   |   |-- reddit-alien.svg
    |       |       |   |   |   |-- reddit-square.svg
    |       |       |   |   |   |-- reddit.svg
    |       |       |   |   |   |-- redhat.svg
    |       |       |   |   |   |-- renren.svg
    |       |       |   |   |   |-- replyd.svg
    |       |       |   |   |   |-- researchgate.svg
    |       |       |   |   |   |-- resolving.svg
    |       |       |   |   |   |-- rev.svg
    |       |       |   |   |   |-- rocketchat.svg
    |       |       |   |   |   |-- rockrms.svg
    |       |       |   |   |   |-- safari.svg
    |       |       |   |   |   |-- salesforce.svg
    |       |       |   |   |   |-- sass.svg
    |       |       |   |   |   |-- schlix.svg
    |       |       |   |   |   |-- scribd.svg
    |       |       |   |   |   |-- searchengin.svg
    |       |       |   |   |   |-- sellcast.svg
    |       |       |   |   |   |-- sellsy.svg
    |       |       |   |   |   |-- servicestack.svg
    |       |       |   |   |   |-- shirtsinbulk.svg
    |       |       |   |   |   |-- shopware.svg
    |       |       |   |   |   |-- simplybuilt.svg
    |       |       |   |   |   |-- sistrix.svg
    |       |       |   |   |   |-- sith.svg
    |       |       |   |   |   |-- sketch.svg
    |       |       |   |   |   |-- skyatlas.svg
    |       |       |   |   |   |-- skype.svg
    |       |       |   |   |   |-- slack-hash.svg
    |       |       |   |   |   |-- slack.svg
    |       |       |   |   |   |-- slideshare.svg
    |       |       |   |   |   |-- snapchat-ghost.svg
    |       |       |   |   |   |-- snapchat-square.svg
    |       |       |   |   |   |-- snapchat.svg
    |       |       |   |   |   |-- soundcloud.svg
    |       |       |   |   |   |-- sourcetree.svg
    |       |       |   |   |   |-- speakap.svg
    |       |       |   |   |   |-- speaker-deck.svg
    |       |       |   |   |   |-- spotify.svg
    |       |       |   |   |   |-- squarespace.svg
    |       |       |   |   |   |-- stack-exchange.svg
    |       |       |   |   |   |-- stack-overflow.svg
    |       |       |   |   |   |-- stackpath.svg
    |       |       |   |   |   |-- staylinked.svg
    |       |       |   |   |   |-- steam-square.svg
    |       |       |   |   |   |-- steam-symbol.svg
    |       |       |   |   |   |-- steam.svg
    |       |       |   |   |   |-- sticker-mule.svg
    |       |       |   |   |   |-- strava.svg
    |       |       |   |   |   |-- stripe-s.svg
    |       |       |   |   |   |-- stripe.svg
    |       |       |   |   |   |-- studiovinari.svg
    |       |       |   |   |   |-- stumbleupon-circle.svg
    |       |       |   |   |   |-- stumbleupon.svg
    |       |       |   |   |   |-- superpowers.svg
    |       |       |   |   |   |-- supple.svg
    |       |       |   |   |   |-- suse.svg
    |       |       |   |   |   |-- symfony.svg
    |       |       |   |   |   |-- teamspeak.svg
    |       |       |   |   |   |-- telegram-plane.svg
    |       |       |   |   |   |-- telegram.svg
    |       |       |   |   |   |-- tencent-weibo.svg
    |       |       |   |   |   |-- the-red-yeti.svg
    |       |       |   |   |   |-- themeco.svg
    |       |       |   |   |   |-- themeisle.svg
    |       |       |   |   |   |-- think-peaks.svg
    |       |       |   |   |   |-- trade-federation.svg
    |       |       |   |   |   |-- trello.svg
    |       |       |   |   |   |-- tripadvisor.svg
    |       |       |   |   |   |-- tumblr-square.svg
    |       |       |   |   |   |-- tumblr.svg
    |       |       |   |   |   |-- twitch.svg
    |       |       |   |   |   |-- twitter-square.svg
    |       |       |   |   |   |-- twitter.svg
    |       |       |   |   |   |-- typo3.svg
    |       |       |   |   |   |-- uber.svg
    |       |       |   |   |   |-- ubuntu.svg
    |       |       |   |   |   |-- uikit.svg
    |       |       |   |   |   |-- uniregistry.svg
    |       |       |   |   |   |-- untappd.svg
    |       |       |   |   |   |-- ups.svg
    |       |       |   |   |   |-- usb.svg
    |       |       |   |   |   |-- usps.svg
    |       |       |   |   |   |-- ussunnah.svg
    |       |       |   |   |   |-- vaadin.svg
    |       |       |   |   |   |-- viacoin.svg
    |       |       |   |   |   |-- viadeo-square.svg
    |       |       |   |   |   |-- viadeo.svg
    |       |       |   |   |   |-- viber.svg
    |       |       |   |   |   |-- vimeo-square.svg
    |       |       |   |   |   |-- vimeo-v.svg
    |       |       |   |   |   |-- vimeo.svg
    |       |       |   |   |   |-- vine.svg
    |       |       |   |   |   |-- vk.svg
    |       |       |   |   |   |-- vnv.svg
    |       |       |   |   |   |-- vuejs.svg
    |       |       |   |   |   |-- waze.svg
    |       |       |   |   |   |-- weebly.svg
    |       |       |   |   |   |-- weibo.svg
    |       |       |   |   |   |-- weixin.svg
    |       |       |   |   |   |-- whatsapp-square.svg
    |       |       |   |   |   |-- whatsapp.svg
    |       |       |   |   |   |-- whmcs.svg
    |       |       |   |   |   |-- wikipedia-w.svg
    |       |       |   |   |   |-- windows.svg
    |       |       |   |   |   |-- wix.svg
    |       |       |   |   |   |-- wizards-of-the-coast.svg
    |       |       |   |   |   |-- wolf-pack-battalion.svg
    |       |       |   |   |   |-- wordpress-simple.svg
    |       |       |   |   |   |-- wordpress.svg
    |       |       |   |   |   |-- wpbeginner.svg
    |       |       |   |   |   |-- wpexplorer.svg
    |       |       |   |   |   |-- wpforms.svg
    |       |       |   |   |   |-- wpressr.svg
    |       |       |   |   |   |-- xbox.svg
    |       |       |   |   |   |-- xing-square.svg
    |       |       |   |   |   |-- xing.svg
    |       |       |   |   |   |-- y-combinator.svg
    |       |       |   |   |   |-- yahoo.svg
    |       |       |   |   |   |-- yammer.svg
    |       |       |   |   |   |-- yandex-international.svg
    |       |       |   |   |   |-- yandex.svg
    |       |       |   |   |   |-- yarn.svg
    |       |       |   |   |   |-- yelp.svg
    |       |       |   |   |   |-- yoast.svg
    |       |       |   |   |   |-- youtube-square.svg
    |       |       |   |   |   |-- youtube.svg
    |       |       |   |   |   |-- zhihu.svg
    |       |       |   |   |-- regular
    |       |       |   |   |   |-- address-book.svg
    |       |       |   |   |   |-- address-card.svg
    |       |       |   |   |   |-- angry.svg
    |       |       |   |   |   |-- arrow-alt-circle-down.svg
    |       |       |   |   |   |-- arrow-alt-circle-left.svg
    |       |       |   |   |   |-- arrow-alt-circle-right.svg
    |       |       |   |   |   |-- arrow-alt-circle-up.svg
    |       |       |   |   |   |-- bell-slash.svg
    |       |       |   |   |   |-- bell.svg
    |       |       |   |   |   |-- bookmark.svg
    |       |       |   |   |   |-- building.svg
    |       |       |   |   |   |-- calendar-alt.svg
    |       |       |   |   |   |-- calendar-check.svg
    |       |       |   |   |   |-- calendar-minus.svg
    |       |       |   |   |   |-- calendar-plus.svg
    |       |       |   |   |   |-- calendar-times.svg
    |       |       |   |   |   |-- calendar.svg
    |       |       |   |   |   |-- caret-square-down.svg
    |       |       |   |   |   |-- caret-square-left.svg
    |       |       |   |   |   |-- caret-square-right.svg
    |       |       |   |   |   |-- caret-square-up.svg
    |       |       |   |   |   |-- chart-bar.svg
    |       |       |   |   |   |-- check-circle.svg
    |       |       |   |   |   |-- check-square.svg
    |       |       |   |   |   |-- circle.svg
    |       |       |   |   |   |-- clipboard.svg
    |       |       |   |   |   |-- clock.svg
    |       |       |   |   |   |-- clone.svg
    |       |       |   |   |   |-- closed-captioning.svg
    |       |       |   |   |   |-- comment-alt.svg
    |       |       |   |   |   |-- comment-dots.svg
    |       |       |   |   |   |-- comment.svg
    |       |       |   |   |   |-- comments.svg
    |       |       |   |   |   |-- compass.svg
    |       |       |   |   |   |-- copy.svg
    |       |       |   |   |   |-- copyright.svg
    |       |       |   |   |   |-- credit-card.svg
    |       |       |   |   |   |-- dizzy.svg
    |       |       |   |   |   |-- dot-circle.svg
    |       |       |   |   |   |-- edit.svg
    |       |       |   |   |   |-- envelope-open.svg
    |       |       |   |   |   |-- envelope.svg
    |       |       |   |   |   |-- eye-slash.svg
    |       |       |   |   |   |-- eye.svg
    |       |       |   |   |   |-- file-alt.svg
    |       |       |   |   |   |-- file-archive.svg
    |       |       |   |   |   |-- file-audio.svg
    |       |       |   |   |   |-- file-code.svg
    |       |       |   |   |   |-- file-excel.svg
    |       |       |   |   |   |-- file-image.svg
    |       |       |   |   |   |-- file-pdf.svg
    |       |       |   |   |   |-- file-powerpoint.svg
    |       |       |   |   |   |-- file-video.svg
    |       |       |   |   |   |-- file-word.svg
    |       |       |   |   |   |-- file.svg
    |       |       |   |   |   |-- flag.svg
    |       |       |   |   |   |-- flushed.svg
    |       |       |   |   |   |-- folder-open.svg
    |       |       |   |   |   |-- folder.svg
    |       |       |   |   |   |-- font-awesome-logo-full.svg
    |       |       |   |   |   |-- frown-open.svg
    |       |       |   |   |   |-- frown.svg
    |       |       |   |   |   |-- futbol.svg
    |       |       |   |   |   |-- gem.svg
    |       |       |   |   |   |-- grimace.svg
    |       |       |   |   |   |-- grin-alt.svg
    |       |       |   |   |   |-- grin-beam-sweat.svg
    |       |       |   |   |   |-- grin-beam.svg
    |       |       |   |   |   |-- grin-hearts.svg
    |       |       |   |   |   |-- grin-squint-tears.svg
    |       |       |   |   |   |-- grin-squint.svg
    |       |       |   |   |   |-- grin-stars.svg
    |       |       |   |   |   |-- grin-tears.svg
    |       |       |   |   |   |-- grin-tongue-squint.svg
    |       |       |   |   |   |-- grin-tongue-wink.svg
    |       |       |   |   |   |-- grin-tongue.svg
    |       |       |   |   |   |-- grin-wink.svg
    |       |       |   |   |   |-- grin.svg
    |       |       |   |   |   |-- hand-lizard.svg
    |       |       |   |   |   |-- hand-paper.svg
    |       |       |   |   |   |-- hand-peace.svg
    |       |       |   |   |   |-- hand-point-down.svg
    |       |       |   |   |   |-- hand-point-left.svg
    |       |       |   |   |   |-- hand-point-right.svg
    |       |       |   |   |   |-- hand-point-up.svg
    |       |       |   |   |   |-- hand-pointer.svg
    |       |       |   |   |   |-- hand-rock.svg
    |       |       |   |   |   |-- hand-scissors.svg
    |       |       |   |   |   |-- hand-spock.svg
    |       |       |   |   |   |-- handshake.svg
    |       |       |   |   |   |-- hdd.svg
    |       |       |   |   |   |-- heart.svg
    |       |       |   |   |   |-- hospital.svg
    |       |       |   |   |   |-- hourglass.svg
    |       |       |   |   |   |-- id-badge.svg
    |       |       |   |   |   |-- id-card.svg
    |       |       |   |   |   |-- image.svg
    |       |       |   |   |   |-- images.svg
    |       |       |   |   |   |-- keyboard.svg
    |       |       |   |   |   |-- kiss-beam.svg
    |       |       |   |   |   |-- kiss-wink-heart.svg
    |       |       |   |   |   |-- kiss.svg
    |       |       |   |   |   |-- laugh-beam.svg
    |       |       |   |   |   |-- laugh-squint.svg
    |       |       |   |   |   |-- laugh-wink.svg
    |       |       |   |   |   |-- laugh.svg
    |       |       |   |   |   |-- lemon.svg
    |       |       |   |   |   |-- life-ring.svg
    |       |       |   |   |   |-- lightbulb.svg
    |       |       |   |   |   |-- list-alt.svg
    |       |       |   |   |   |-- map.svg
    |       |       |   |   |   |-- meh-blank.svg
    |       |       |   |   |   |-- meh-rolling-eyes.svg
    |       |       |   |   |   |-- meh.svg
    |       |       |   |   |   |-- minus-square.svg
    |       |       |   |   |   |-- money-bill-alt.svg
    |       |       |   |   |   |-- moon.svg
    |       |       |   |   |   |-- newspaper.svg
    |       |       |   |   |   |-- object-group.svg
    |       |       |   |   |   |-- object-ungroup.svg
    |       |       |   |   |   |-- paper-plane.svg
    |       |       |   |   |   |-- pause-circle.svg
    |       |       |   |   |   |-- play-circle.svg
    |       |       |   |   |   |-- plus-square.svg
    |       |       |   |   |   |-- question-circle.svg
    |       |       |   |   |   |-- registered.svg
    |       |       |   |   |   |-- sad-cry.svg
    |       |       |   |   |   |-- sad-tear.svg
    |       |       |   |   |   |-- save.svg
    |       |       |   |   |   |-- share-square.svg
    |       |       |   |   |   |-- smile-beam.svg
    |       |       |   |   |   |-- smile-wink.svg
    |       |       |   |   |   |-- smile.svg
    |       |       |   |   |   |-- snowflake.svg
    |       |       |   |   |   |-- square.svg
    |       |       |   |   |   |-- star-half.svg
    |       |       |   |   |   |-- star.svg
    |       |       |   |   |   |-- sticky-note.svg
    |       |       |   |   |   |-- stop-circle.svg
    |       |       |   |   |   |-- sun.svg
    |       |       |   |   |   |-- surprise.svg
    |       |       |   |   |   |-- thumbs-down.svg
    |       |       |   |   |   |-- thumbs-up.svg
    |       |       |   |   |   |-- times-circle.svg
    |       |       |   |   |   |-- tired.svg
    |       |       |   |   |   |-- trash-alt.svg
    |       |       |   |   |   |-- user-circle.svg
    |       |       |   |   |   |-- user.svg
    |       |       |   |   |   |-- window-close.svg
    |       |       |   |   |   |-- window-maximize.svg
    |       |       |   |   |   |-- window-minimize.svg
    |       |       |   |   |   |-- window-restore.svg
    |       |       |   |   |-- solid
    |       |       |   |       |-- ad.svg
    |       |       |   |       |-- address-book.svg
    |       |       |   |       |-- address-card.svg
    |       |       |   |       |-- adjust.svg
    |       |       |   |       |-- air-freshener.svg
    |       |       |   |       |-- align-center.svg
    |       |       |   |       |-- align-justify.svg
    |       |       |   |       |-- align-left.svg
    |       |       |   |       |-- align-right.svg
    |       |       |   |       |-- allergies.svg
    |       |       |   |       |-- ambulance.svg
    |       |       |   |       |-- american-sign-language-interpreting.svg
    |       |       |   |       |-- anchor.svg
    |       |       |   |       |-- angle-double-down.svg
    |       |       |   |       |-- angle-double-left.svg
    |       |       |   |       |-- angle-double-right.svg
    |       |       |   |       |-- angle-double-up.svg
    |       |       |   |       |-- angle-down.svg
    |       |       |   |       |-- angle-left.svg
    |       |       |   |       |-- angle-right.svg
    |       |       |   |       |-- angle-up.svg
    |       |       |   |       |-- angry.svg
    |       |       |   |       |-- ankh.svg
    |       |       |   |       |-- apple-alt.svg
    |       |       |   |       |-- archive.svg
    |       |       |   |       |-- archway.svg
    |       |       |   |       |-- arrow-alt-circle-down.svg
    |       |       |   |       |-- arrow-alt-circle-left.svg
    |       |       |   |       |-- arrow-alt-circle-right.svg
    |       |       |   |       |-- arrow-alt-circle-up.svg
    |       |       |   |       |-- arrow-circle-down.svg
    |       |       |   |       |-- arrow-circle-left.svg
    |       |       |   |       |-- arrow-circle-right.svg
    |       |       |   |       |-- arrow-circle-up.svg
    |       |       |   |       |-- arrow-down.svg
    |       |       |   |       |-- arrow-left.svg
    |       |       |   |       |-- arrow-right.svg
    |       |       |   |       |-- arrow-up.svg
    |       |       |   |       |-- arrows-alt-h.svg
    |       |       |   |       |-- arrows-alt-v.svg
    |       |       |   |       |-- arrows-alt.svg
    |       |       |   |       |-- assistive-listening-systems.svg
    |       |       |   |       |-- asterisk.svg
    |       |       |   |       |-- at.svg
    |       |       |   |       |-- atlas.svg
    |       |       |   |       |-- atom.svg
    |       |       |   |       |-- audio-description.svg
    |       |       |   |       |-- award.svg
    |       |       |   |       |-- baby-carriage.svg
    |       |       |   |       |-- baby.svg
    |       |       |   |       |-- backspace.svg
    |       |       |   |       |-- backward.svg
    |       |       |   |       |-- bacon.svg
    |       |       |   |       |-- balance-scale.svg
    |       |       |   |       |-- ban.svg
    |       |       |   |       |-- band-aid.svg
    |       |       |   |       |-- barcode.svg
    |       |       |   |       |-- bars.svg
    |       |       |   |       |-- baseball-ball.svg
    |       |       |   |       |-- basketball-ball.svg
    |       |       |   |       |-- bath.svg
    |       |       |   |       |-- battery-empty.svg
    |       |       |   |       |-- battery-full.svg
    |       |       |   |       |-- battery-half.svg
    |       |       |   |       |-- battery-quarter.svg
    |       |       |   |       |-- battery-three-quarters.svg
    |       |       |   |       |-- bed.svg
    |       |       |   |       |-- beer.svg
    |       |       |   |       |-- bell-slash.svg
    |       |       |   |       |-- bell.svg
    |       |       |   |       |-- bezier-curve.svg
    |       |       |   |       |-- bible.svg
    |       |       |   |       |-- bicycle.svg
    |       |       |   |       |-- binoculars.svg
    |       |       |   |       |-- biohazard.svg
    |       |       |   |       |-- birthday-cake.svg
    |       |       |   |       |-- blender-phone.svg
    |       |       |   |       |-- blender.svg
    |       |       |   |       |-- blind.svg
    |       |       |   |       |-- blog.svg
    |       |       |   |       |-- bold.svg
    |       |       |   |       |-- bolt.svg
    |       |       |   |       |-- bomb.svg
    |       |       |   |       |-- bone.svg
    |       |       |   |       |-- bong.svg
    |       |       |   |       |-- book-dead.svg
    |       |       |   |       |-- book-medical.svg
    |       |       |   |       |-- book-open.svg
    |       |       |   |       |-- book-reader.svg
    |       |       |   |       |-- book.svg
    |       |       |   |       |-- bookmark.svg
    |       |       |   |       |-- bowling-ball.svg
    |       |       |   |       |-- box-open.svg
    |       |       |   |       |-- box.svg
    |       |       |   |       |-- boxes.svg
    |       |       |   |       |-- braille.svg
    |       |       |   |       |-- brain.svg
    |       |       |   |       |-- bread-slice.svg
    |       |       |   |       |-- briefcase-medical.svg
    |       |       |   |       |-- briefcase.svg
    |       |       |   |       |-- broadcast-tower.svg
    |       |       |   |       |-- broom.svg
    |       |       |   |       |-- brush.svg
    |       |       |   |       |-- bug.svg
    |       |       |   |       |-- building.svg
    |       |       |   |       |-- bullhorn.svg
    |       |       |   |       |-- bullseye.svg
    |       |       |   |       |-- burn.svg
    |       |       |   |       |-- bus-alt.svg
    |       |       |   |       |-- bus.svg
    |       |       |   |       |-- business-time.svg
    |       |       |   |       |-- calculator.svg
    |       |       |   |       |-- calendar-alt.svg
    |       |       |   |       |-- calendar-check.svg
    |       |       |   |       |-- calendar-day.svg
    |       |       |   |       |-- calendar-minus.svg
    |       |       |   |       |-- calendar-plus.svg
    |       |       |   |       |-- calendar-times.svg
    |       |       |   |       |-- calendar-week.svg
    |       |       |   |       |-- calendar.svg
    |       |       |   |       |-- camera-retro.svg
    |       |       |   |       |-- camera.svg
    |       |       |   |       |-- campground.svg
    |       |       |   |       |-- candy-cane.svg
    |       |       |   |       |-- cannabis.svg
    |       |       |   |       |-- capsules.svg
    |       |       |   |       |-- car-alt.svg
    |       |       |   |       |-- car-battery.svg
    |       |       |   |       |-- car-crash.svg
    |       |       |   |       |-- car-side.svg
    |       |       |   |       |-- car.svg
    |       |       |   |       |-- caret-down.svg
    |       |       |   |       |-- caret-left.svg
    |       |       |   |       |-- caret-right.svg
    |       |       |   |       |-- caret-square-down.svg
    |       |       |   |       |-- caret-square-left.svg
    |       |       |   |       |-- caret-square-right.svg
    |       |       |   |       |-- caret-square-up.svg
    |       |       |   |       |-- caret-up.svg
    |       |       |   |       |-- carrot.svg
    |       |       |   |       |-- cart-arrow-down.svg
    |       |       |   |       |-- cart-plus.svg
    |       |       |   |       |-- cash-register.svg
    |       |       |   |       |-- cat.svg
    |       |       |   |       |-- certificate.svg
    |       |       |   |       |-- chair.svg
    |       |       |   |       |-- chalkboard-teacher.svg
    |       |       |   |       |-- chalkboard.svg
    |       |       |   |       |-- charging-station.svg
    |       |       |   |       |-- chart-area.svg
    |       |       |   |       |-- chart-bar.svg
    |       |       |   |       |-- chart-line.svg
    |       |       |   |       |-- chart-pie.svg
    |       |       |   |       |-- check-circle.svg
    |       |       |   |       |-- check-double.svg
    |       |       |   |       |-- check-square.svg
    |       |       |   |       |-- check.svg
    |       |       |   |       |-- cheese.svg
    |       |       |   |       |-- chess-bishop.svg
    |       |       |   |       |-- chess-board.svg
    |       |       |   |       |-- chess-king.svg
    |       |       |   |       |-- chess-knight.svg
    |       |       |   |       |-- chess-pawn.svg
    |       |       |   |       |-- chess-queen.svg
    |       |       |   |       |-- chess-rook.svg
    |       |       |   |       |-- chess.svg
    |       |       |   |       |-- chevron-circle-down.svg
    |       |       |   |       |-- chevron-circle-left.svg
    |       |       |   |       |-- chevron-circle-right.svg
    |       |       |   |       |-- chevron-circle-up.svg
    |       |       |   |       |-- chevron-down.svg
    |       |       |   |       |-- chevron-left.svg
    |       |       |   |       |-- chevron-right.svg
    |       |       |   |       |-- chevron-up.svg
    |       |       |   |       |-- child.svg
    |       |       |   |       |-- church.svg
    |       |       |   |       |-- circle-notch.svg
    |       |       |   |       |-- circle.svg
    |       |       |   |       |-- city.svg
    |       |       |   |       |-- clinic-medical.svg
    |       |       |   |       |-- clipboard-check.svg
    |       |       |   |       |-- clipboard-list.svg
    |       |       |   |       |-- clipboard.svg
    |       |       |   |       |-- clock.svg
    |       |       |   |       |-- clone.svg
    |       |       |   |       |-- closed-captioning.svg
    |       |       |   |       |-- cloud-download-alt.svg
    |       |       |   |       |-- cloud-meatball.svg
    |       |       |   |       |-- cloud-moon-rain.svg
    |       |       |   |       |-- cloud-moon.svg
    |       |       |   |       |-- cloud-rain.svg
    |       |       |   |       |-- cloud-showers-heavy.svg
    |       |       |   |       |-- cloud-sun-rain.svg
    |       |       |   |       |-- cloud-sun.svg
    |       |       |   |       |-- cloud-upload-alt.svg
    |       |       |   |       |-- cloud.svg
    |       |       |   |       |-- cocktail.svg
    |       |       |   |       |-- code-branch.svg
    |       |       |   |       |-- code.svg
    |       |       |   |       |-- coffee.svg
    |       |       |   |       |-- cog.svg
    |       |       |   |       |-- cogs.svg
    |       |       |   |       |-- coins.svg
    |       |       |   |       |-- columns.svg
    |       |       |   |       |-- comment-alt.svg
    |       |       |   |       |-- comment-dollar.svg
    |       |       |   |       |-- comment-dots.svg
    |       |       |   |       |-- comment-medical.svg
    |       |       |   |       |-- comment-slash.svg
    |       |       |   |       |-- comment.svg
    |       |       |   |       |-- comments-dollar.svg
    |       |       |   |       |-- comments.svg
    |       |       |   |       |-- compact-disc.svg
    |       |       |   |       |-- compass.svg
    |       |       |   |       |-- compress-arrows-alt.svg
    |       |       |   |       |-- compress.svg
    |       |       |   |       |-- concierge-bell.svg
    |       |       |   |       |-- cookie-bite.svg
    |       |       |   |       |-- cookie.svg
    |       |       |   |       |-- copy.svg
    |       |       |   |       |-- copyright.svg
    |       |       |   |       |-- couch.svg
    |       |       |   |       |-- credit-card.svg
    |       |       |   |       |-- crop-alt.svg
    |       |       |   |       |-- crop.svg
    |       |       |   |       |-- cross.svg
    |       |       |   |       |-- crosshairs.svg
    |       |       |   |       |-- crow.svg
    |       |       |   |       |-- crown.svg
    |       |       |   |       |-- crutch.svg
    |       |       |   |       |-- cube.svg
    |       |       |   |       |-- cubes.svg
    |       |       |   |       |-- cut.svg
    |       |       |   |       |-- database.svg
    |       |       |   |       |-- deaf.svg
    |       |       |   |       |-- democrat.svg
    |       |       |   |       |-- desktop.svg
    |       |       |   |       |-- dharmachakra.svg
    |       |       |   |       |-- diagnoses.svg
    |       |       |   |       |-- dice-d20.svg
    |       |       |   |       |-- dice-d6.svg
    |       |       |   |       |-- dice-five.svg
    |       |       |   |       |-- dice-four.svg
    |       |       |   |       |-- dice-one.svg
    |       |       |   |       |-- dice-six.svg
    |       |       |   |       |-- dice-three.svg
    |       |       |   |       |-- dice-two.svg
    |       |       |   |       |-- dice.svg
    |       |       |   |       |-- digital-tachograph.svg
    |       |       |   |       |-- directions.svg
    |       |       |   |       |-- divide.svg
    |       |       |   |       |-- dizzy.svg
    |       |       |   |       |-- dna.svg
    |       |       |   |       |-- dog.svg
    |       |       |   |       |-- dollar-sign.svg
    |       |       |   |       |-- dolly-flatbed.svg
    |       |       |   |       |-- dolly.svg
    |       |       |   |       |-- donate.svg
    |       |       |   |       |-- door-closed.svg
    |       |       |   |       |-- door-open.svg
    |       |       |   |       |-- dot-circle.svg
    |       |       |   |       |-- dove.svg
    |       |       |   |       |-- download.svg
    |       |       |   |       |-- drafting-compass.svg
    |       |       |   |       |-- dragon.svg
    |       |       |   |       |-- draw-polygon.svg
    |       |       |   |       |-- drum-steelpan.svg
    |       |       |   |       |-- drum.svg
    |       |       |   |       |-- drumstick-bite.svg
    |       |       |   |       |-- dumbbell.svg
    |       |       |   |       |-- dumpster-fire.svg
    |       |       |   |       |-- dumpster.svg
    |       |       |   |       |-- dungeon.svg
    |       |       |   |       |-- edit.svg
    |       |       |   |       |-- egg.svg
    |       |       |   |       |-- eject.svg
    |       |       |   |       |-- ellipsis-h.svg
    |       |       |   |       |-- ellipsis-v.svg
    |       |       |   |       |-- envelope-open-text.svg
    |       |       |   |       |-- envelope-open.svg
    |       |       |   |       |-- envelope-square.svg
    |       |       |   |       |-- envelope.svg
    |       |       |   |       |-- equals.svg
    |       |       |   |       |-- eraser.svg
    |       |       |   |       |-- ethernet.svg
    |       |       |   |       |-- euro-sign.svg
    |       |       |   |       |-- exchange-alt.svg
    |       |       |   |       |-- exclamation-circle.svg
    |       |       |   |       |-- exclamation-triangle.svg
    |       |       |   |       |-- exclamation.svg
    |       |       |   |       |-- expand-arrows-alt.svg
    |       |       |   |       |-- expand.svg
    |       |       |   |       |-- external-link-alt.svg
    |       |       |   |       |-- external-link-square-alt.svg
    |       |       |   |       |-- eye-dropper.svg
    |       |       |   |       |-- eye-slash.svg
    |       |       |   |       |-- eye.svg
    |       |       |   |       |-- fast-backward.svg
    |       |       |   |       |-- fast-forward.svg
    |       |       |   |       |-- fax.svg
    |       |       |   |       |-- feather-alt.svg
    |       |       |   |       |-- feather.svg
    |       |       |   |       |-- female.svg
    |       |       |   |       |-- fighter-jet.svg
    |       |       |   |       |-- file-alt.svg
    |       |       |   |       |-- file-archive.svg
    |       |       |   |       |-- file-audio.svg
    |       |       |   |       |-- file-code.svg
    |       |       |   |       |-- file-contract.svg
    |       |       |   |       |-- file-csv.svg
    |       |       |   |       |-- file-download.svg
    |       |       |   |       |-- file-excel.svg
    |       |       |   |       |-- file-export.svg
    |       |       |   |       |-- file-image.svg
    |       |       |   |       |-- file-import.svg
    |       |       |   |       |-- file-invoice-dollar.svg
    |       |       |   |       |-- file-invoice.svg
    |       |       |   |       |-- file-medical-alt.svg
    |       |       |   |       |-- file-medical.svg
    |       |       |   |       |-- file-pdf.svg
    |       |       |   |       |-- file-powerpoint.svg
    |       |       |   |       |-- file-prescription.svg
    |       |       |   |       |-- file-signature.svg
    |       |       |   |       |-- file-upload.svg
    |       |       |   |       |-- file-video.svg
    |       |       |   |       |-- file-word.svg
    |       |       |   |       |-- file.svg
    |       |       |   |       |-- fill-drip.svg
    |       |       |   |       |-- fill.svg
    |       |       |   |       |-- film.svg
    |       |       |   |       |-- filter.svg
    |       |       |   |       |-- fingerprint.svg
    |       |       |   |       |-- fire-alt.svg
    |       |       |   |       |-- fire-extinguisher.svg
    |       |       |   |       |-- fire.svg
    |       |       |   |       |-- first-aid.svg
    |       |       |   |       |-- fish.svg
    |       |       |   |       |-- fist-raised.svg
    |       |       |   |       |-- flag-checkered.svg
    |       |       |   |       |-- flag-usa.svg
    |       |       |   |       |-- flag.svg
    |       |       |   |       |-- flask.svg
    |       |       |   |       |-- flushed.svg
    |       |       |   |       |-- folder-minus.svg
    |       |       |   |       |-- folder-open.svg
    |       |       |   |       |-- folder-plus.svg
    |       |       |   |       |-- folder.svg
    |       |       |   |       |-- font-awesome-logo-full.svg
    |       |       |   |       |-- font.svg
    |       |       |   |       |-- football-ball.svg
    |       |       |   |       |-- forward.svg
    |       |       |   |       |-- frog.svg
    |       |       |   |       |-- frown-open.svg
    |       |       |   |       |-- frown.svg
    |       |       |   |       |-- funnel-dollar.svg
    |       |       |   |       |-- futbol.svg
    |       |       |   |       |-- gamepad.svg
    |       |       |   |       |-- gas-pump.svg
    |       |       |   |       |-- gavel.svg
    |       |       |   |       |-- gem.svg
    |       |       |   |       |-- genderless.svg
    |       |       |   |       |-- ghost.svg
    |       |       |   |       |-- gift.svg
    |       |       |   |       |-- gifts.svg
    |       |       |   |       |-- glass-cheers.svg
    |       |       |   |       |-- glass-martini-alt.svg
    |       |       |   |       |-- glass-martini.svg
    |       |       |   |       |-- glass-whiskey.svg
    |       |       |   |       |-- glasses.svg
    |       |       |   |       |-- globe-africa.svg
    |       |       |   |       |-- globe-americas.svg
    |       |       |   |       |-- globe-asia.svg
    |       |       |   |       |-- globe-europe.svg
    |       |       |   |       |-- globe.svg
    |       |       |   |       |-- golf-ball.svg
    |       |       |   |       |-- gopuram.svg
    |       |       |   |       |-- graduation-cap.svg
    |       |       |   |       |-- greater-than-equal.svg
    |       |       |   |       |-- greater-than.svg
    |       |       |   |       |-- grimace.svg
    |       |       |   |       |-- grin-alt.svg
    |       |       |   |       |-- grin-beam-sweat.svg
    |       |       |   |       |-- grin-beam.svg
    |       |       |   |       |-- grin-hearts.svg
    |       |       |   |       |-- grin-squint-tears.svg
    |       |       |   |       |-- grin-squint.svg
    |       |       |   |       |-- grin-stars.svg
    |       |       |   |       |-- grin-tears.svg
    |       |       |   |       |-- grin-tongue-squint.svg
    |       |       |   |       |-- grin-tongue-wink.svg
    |       |       |   |       |-- grin-tongue.svg
    |       |       |   |       |-- grin-wink.svg
    |       |       |   |       |-- grin.svg
    |       |       |   |       |-- grip-horizontal.svg
    |       |       |   |       |-- grip-lines-vertical.svg
    |       |       |   |       |-- grip-lines.svg
    |       |       |   |       |-- grip-vertical.svg
    |       |       |   |       |-- guitar.svg
    |       |       |   |       |-- h-square.svg
    |       |       |   |       |-- hamburger.svg
    |       |       |   |       |-- hammer.svg
    |       |       |   |       |-- hamsa.svg
    |       |       |   |       |-- hand-holding-heart.svg
    |       |       |   |       |-- hand-holding-usd.svg
    |       |       |   |       |-- hand-holding.svg
    |       |       |   |       |-- hand-lizard.svg
    |       |       |   |       |-- hand-middle-finger.svg
    |       |       |   |       |-- hand-paper.svg
    |       |       |   |       |-- hand-peace.svg
    |       |       |   |       |-- hand-point-down.svg
    |       |       |   |       |-- hand-point-left.svg
    |       |       |   |       |-- hand-point-right.svg
    |       |       |   |       |-- hand-point-up.svg
    |       |       |   |       |-- hand-pointer.svg
    |       |       |   |       |-- hand-rock.svg
    |       |       |   |       |-- hand-scissors.svg
    |       |       |   |       |-- hand-spock.svg
    |       |       |   |       |-- hands-helping.svg
    |       |       |   |       |-- hands.svg
    |       |       |   |       |-- handshake.svg
    |       |       |   |       |-- hanukiah.svg
    |       |       |   |       |-- hard-hat.svg
    |       |       |   |       |-- hashtag.svg
    |       |       |   |       |-- hat-wizard.svg
    |       |       |   |       |-- haykal.svg
    |       |       |   |       |-- hdd.svg
    |       |       |   |       |-- heading.svg
    |       |       |   |       |-- headphones-alt.svg
    |       |       |   |       |-- headphones.svg
    |       |       |   |       |-- headset.svg
    |       |       |   |       |-- heart-broken.svg
    |       |       |   |       |-- heart.svg
    |       |       |   |       |-- heartbeat.svg
    |       |       |   |       |-- helicopter.svg
    |       |       |   |       |-- highlighter.svg
    |       |       |   |       |-- hiking.svg
    |       |       |   |       |-- hippo.svg
    |       |       |   |       |-- history.svg
    |       |       |   |       |-- hockey-puck.svg
    |       |       |   |       |-- holly-berry.svg
    |       |       |   |       |-- home.svg
    |       |       |   |       |-- horse-head.svg
    |       |       |   |       |-- horse.svg
    |       |       |   |       |-- hospital-alt.svg
    |       |       |   |       |-- hospital-symbol.svg
    |       |       |   |       |-- hospital.svg
    |       |       |   |       |-- hot-tub.svg
    |       |       |   |       |-- hotdog.svg
    |       |       |   |       |-- hotel.svg
    |       |       |   |       |-- hourglass-end.svg
    |       |       |   |       |-- hourglass-half.svg
    |       |       |   |       |-- hourglass-start.svg
    |       |       |   |       |-- hourglass.svg
    |       |       |   |       |-- house-damage.svg
    |       |       |   |       |-- hryvnia.svg
    |       |       |   |       |-- i-cursor.svg
    |       |       |   |       |-- ice-cream.svg
    |       |       |   |       |-- icicles.svg
    |       |       |   |       |-- id-badge.svg
    |       |       |   |       |-- id-card-alt.svg
    |       |       |   |       |-- id-card.svg
    |       |       |   |       |-- igloo.svg
    |       |       |   |       |-- image.svg
    |       |       |   |       |-- images.svg
    |       |       |   |       |-- inbox.svg
    |       |       |   |       |-- indent.svg
    |       |       |   |       |-- industry.svg
    |       |       |   |       |-- infinity.svg
    |       |       |   |       |-- info-circle.svg
    |       |       |   |       |-- info.svg
    |       |       |   |       |-- italic.svg
    |       |       |   |       |-- jedi.svg
    |       |       |   |       |-- joint.svg
    |       |       |   |       |-- journal-whills.svg
    |       |       |   |       |-- kaaba.svg
    |       |       |   |       |-- key.svg
    |       |       |   |       |-- keyboard.svg
    |       |       |   |       |-- khanda.svg
    |       |       |   |       |-- kiss-beam.svg
    |       |       |   |       |-- kiss-wink-heart.svg
    |       |       |   |       |-- kiss.svg
    |       |       |   |       |-- kiwi-bird.svg
    |       |       |   |       |-- landmark.svg
    |       |       |   |       |-- language.svg
    |       |       |   |       |-- laptop-code.svg
    |       |       |   |       |-- laptop-medical.svg
    |       |       |   |       |-- laptop.svg
    |       |       |   |       |-- laugh-beam.svg
    |       |       |   |       |-- laugh-squint.svg
    |       |       |   |       |-- laugh-wink.svg
    |       |       |   |       |-- laugh.svg
    |       |       |   |       |-- layer-group.svg
    |       |       |   |       |-- leaf.svg
    |       |       |   |       |-- lemon.svg
    |       |       |   |       |-- less-than-equal.svg
    |       |       |   |       |-- less-than.svg
    |       |       |   |       |-- level-down-alt.svg
    |       |       |   |       |-- level-up-alt.svg
    |       |       |   |       |-- life-ring.svg
    |       |       |   |       |-- lightbulb.svg
    |       |       |   |       |-- link.svg
    |       |       |   |       |-- lira-sign.svg
    |       |       |   |       |-- list-alt.svg
    |       |       |   |       |-- list-ol.svg
    |       |       |   |       |-- list-ul.svg
    |       |       |   |       |-- list.svg
    |       |       |   |       |-- location-arrow.svg
    |       |       |   |       |-- lock-open.svg
    |       |       |   |       |-- lock.svg
    |       |       |   |       |-- long-arrow-alt-down.svg
    |       |       |   |       |-- long-arrow-alt-left.svg
    |       |       |   |       |-- long-arrow-alt-right.svg
    |       |       |   |       |-- long-arrow-alt-up.svg
    |       |       |   |       |-- low-vision.svg
    |       |       |   |       |-- luggage-cart.svg
    |       |       |   |       |-- magic.svg
    |       |       |   |       |-- magnet.svg
    |       |       |   |       |-- mail-bulk.svg
    |       |       |   |       |-- male.svg
    |       |       |   |       |-- map-marked-alt.svg
    |       |       |   |       |-- map-marked.svg
    |       |       |   |       |-- map-marker-alt.svg
    |       |       |   |       |-- map-marker.svg
    |       |       |   |       |-- map-pin.svg
    |       |       |   |       |-- map-signs.svg
    |       |       |   |       |-- map.svg
    |       |       |   |       |-- marker.svg
    |       |       |   |       |-- mars-double.svg
    |       |       |   |       |-- mars-stroke-h.svg
    |       |       |   |       |-- mars-stroke-v.svg
    |       |       |   |       |-- mars-stroke.svg
    |       |       |   |       |-- mars.svg
    |       |       |   |       |-- mask.svg
    |       |       |   |       |-- medal.svg
    |       |       |   |       |-- medkit.svg
    |       |       |   |       |-- meh-blank.svg
    |       |       |   |       |-- meh-rolling-eyes.svg
    |       |       |   |       |-- meh.svg
    |       |       |   |       |-- memory.svg
    |       |       |   |       |-- menorah.svg
    |       |       |   |       |-- mercury.svg
    |       |       |   |       |-- meteor.svg
    |       |       |   |       |-- microchip.svg
    |       |       |   |       |-- microphone-alt-slash.svg
    |       |       |   |       |-- microphone-alt.svg
    |       |       |   |       |-- microphone-slash.svg
    |       |       |   |       |-- microphone.svg
    |       |       |   |       |-- microscope.svg
    |       |       |   |       |-- minus-circle.svg
    |       |       |   |       |-- minus-square.svg
    |       |       |   |       |-- minus.svg
    |       |       |   |       |-- mitten.svg
    |       |       |   |       |-- mobile-alt.svg
    |       |       |   |       |-- mobile.svg
    |       |       |   |       |-- money-bill-alt.svg
    |       |       |   |       |-- money-bill-wave-alt.svg
    |       |       |   |       |-- money-bill-wave.svg
    |       |       |   |       |-- money-bill.svg
    |       |       |   |       |-- money-check-alt.svg
    |       |       |   |       |-- money-check.svg
    |       |       |   |       |-- monument.svg
    |       |       |   |       |-- moon.svg
    |       |       |   |       |-- mortar-pestle.svg
    |       |       |   |       |-- mosque.svg
    |       |       |   |       |-- motorcycle.svg
    |       |       |   |       |-- mountain.svg
    |       |       |   |       |-- mouse-pointer.svg
    |       |       |   |       |-- mug-hot.svg
    |       |       |   |       |-- music.svg
    |       |       |   |       |-- network-wired.svg
    |       |       |   |       |-- neuter.svg
    |       |       |   |       |-- newspaper.svg
    |       |       |   |       |-- not-equal.svg
    |       |       |   |       |-- notes-medical.svg
    |       |       |   |       |-- object-group.svg
    |       |       |   |       |-- object-ungroup.svg
    |       |       |   |       |-- oil-can.svg
    |       |       |   |       |-- om.svg
    |       |       |   |       |-- otter.svg
    |       |       |   |       |-- outdent.svg
    |       |       |   |       |-- pager.svg
    |       |       |   |       |-- paint-brush.svg
    |       |       |   |       |-- paint-roller.svg
    |       |       |   |       |-- palette.svg
    |       |       |   |       |-- pallet.svg
    |       |       |   |       |-- paper-plane.svg
    |       |       |   |       |-- paperclip.svg
    |       |       |   |       |-- parachute-box.svg
    |       |       |   |       |-- paragraph.svg
    |       |       |   |       |-- parking.svg
    |       |       |   |       |-- passport.svg
    |       |       |   |       |-- pastafarianism.svg
    |       |       |   |       |-- paste.svg
    |       |       |   |       |-- pause-circle.svg
    |       |       |   |       |-- pause.svg
    |       |       |   |       |-- paw.svg
    |       |       |   |       |-- peace.svg
    |       |       |   |       |-- pen-alt.svg
    |       |       |   |       |-- pen-fancy.svg
    |       |       |   |       |-- pen-nib.svg
    |       |       |   |       |-- pen-square.svg
    |       |       |   |       |-- pen.svg
    |       |       |   |       |-- pencil-alt.svg
    |       |       |   |       |-- pencil-ruler.svg
    |       |       |   |       |-- people-carry.svg
    |       |       |   |       |-- pepper-hot.svg
    |       |       |   |       |-- percent.svg
    |       |       |   |       |-- percentage.svg
    |       |       |   |       |-- person-booth.svg
    |       |       |   |       |-- phone-slash.svg
    |       |       |   |       |-- phone-square.svg
    |       |       |   |       |-- phone-volume.svg
    |       |       |   |       |-- phone.svg
    |       |       |   |       |-- piggy-bank.svg
    |       |       |   |       |-- pills.svg
    |       |       |   |       |-- pizza-slice.svg
    |       |       |   |       |-- place-of-worship.svg
    |       |       |   |       |-- plane-arrival.svg
    |       |       |   |       |-- plane-departure.svg
    |       |       |   |       |-- plane.svg
    |       |       |   |       |-- play-circle.svg
    |       |       |   |       |-- play.svg
    |       |       |   |       |-- plug.svg
    |       |       |   |       |-- plus-circle.svg
    |       |       |   |       |-- plus-square.svg
    |       |       |   |       |-- plus.svg
    |       |       |   |       |-- podcast.svg
    |       |       |   |       |-- poll-h.svg
    |       |       |   |       |-- poll.svg
    |       |       |   |       |-- poo-storm.svg
    |       |       |   |       |-- poo.svg
    |       |       |   |       |-- poop.svg
    |       |       |   |       |-- portrait.svg
    |       |       |   |       |-- pound-sign.svg
    |       |       |   |       |-- power-off.svg
    |       |       |   |       |-- pray.svg
    |       |       |   |       |-- praying-hands.svg
    |       |       |   |       |-- prescription-bottle-alt.svg
    |       |       |   |       |-- prescription-bottle.svg
    |       |       |   |       |-- prescription.svg
    |       |       |   |       |-- print.svg
    |       |       |   |       |-- procedures.svg
    |       |       |   |       |-- project-diagram.svg
    |       |       |   |       |-- puzzle-piece.svg
    |       |       |   |       |-- qrcode.svg
    |       |       |   |       |-- question-circle.svg
    |       |       |   |       |-- question.svg
    |       |       |   |       |-- quidditch.svg
    |       |       |   |       |-- quote-left.svg
    |       |       |   |       |-- quote-right.svg
    |       |       |   |       |-- quran.svg
    |       |       |   |       |-- radiation-alt.svg
    |       |       |   |       |-- radiation.svg
    |       |       |   |       |-- rainbow.svg
    |       |       |   |       |-- random.svg
    |       |       |   |       |-- receipt.svg
    |       |       |   |       |-- recycle.svg
    |       |       |   |       |-- redo-alt.svg
    |       |       |   |       |-- redo.svg
    |       |       |   |       |-- registered.svg
    |       |       |   |       |-- reply-all.svg
    |       |       |   |       |-- reply.svg
    |       |       |   |       |-- republican.svg
    |       |       |   |       |-- restroom.svg
    |       |       |   |       |-- retweet.svg
    |       |       |   |       |-- ribbon.svg
    |       |       |   |       |-- ring.svg
    |       |       |   |       |-- road.svg
    |       |       |   |       |-- robot.svg
    |       |       |   |       |-- rocket.svg
    |       |       |   |       |-- route.svg
    |       |       |   |       |-- rss-square.svg
    |       |       |   |       |-- rss.svg
    |       |       |   |       |-- ruble-sign.svg
    |       |       |   |       |-- ruler-combined.svg
    |       |       |   |       |-- ruler-horizontal.svg
    |       |       |   |       |-- ruler-vertical.svg
    |       |       |   |       |-- ruler.svg
    |       |       |   |       |-- running.svg
    |       |       |   |       |-- rupee-sign.svg
    |       |       |   |       |-- sad-cry.svg
    |       |       |   |       |-- sad-tear.svg
    |       |       |   |       |-- satellite-dish.svg
    |       |       |   |       |-- satellite.svg
    |       |       |   |       |-- save.svg
    |       |       |   |       |-- school.svg
    |       |       |   |       |-- screwdriver.svg
    |       |       |   |       |-- scroll.svg
    |       |       |   |       |-- sd-card.svg
    |       |       |   |       |-- search-dollar.svg
    |       |       |   |       |-- search-location.svg
    |       |       |   |       |-- search-minus.svg
    |       |       |   |       |-- search-plus.svg
    |       |       |   |       |-- search.svg
    |       |       |   |       |-- seedling.svg
    |       |       |   |       |-- server.svg
    |       |       |   |       |-- shapes.svg
    |       |       |   |       |-- share-alt-square.svg
    |       |       |   |       |-- share-alt.svg
    |       |       |   |       |-- share-square.svg
    |       |       |   |       |-- share.svg
    |       |       |   |       |-- shekel-sign.svg
    |       |       |   |       |-- shield-alt.svg
    |       |       |   |       |-- ship.svg
    |       |       |   |       |-- shipping-fast.svg
    |       |       |   |       |-- shoe-prints.svg
    |       |       |   |       |-- shopping-bag.svg
    |       |       |   |       |-- shopping-basket.svg
    |       |       |   |       |-- shopping-cart.svg
    |       |       |   |       |-- shower.svg
    |       |       |   |       |-- shuttle-van.svg
    |       |       |   |       |-- sign-in-alt.svg
    |       |       |   |       |-- sign-language.svg
    |       |       |   |       |-- sign-out-alt.svg
    |       |       |   |       |-- sign.svg
    |       |       |   |       |-- signal.svg
    |       |       |   |       |-- signature.svg
    |       |       |   |       |-- sim-card.svg
    |       |       |   |       |-- sitemap.svg
    |       |       |   |       |-- skating.svg
    |       |       |   |       |-- skiing-nordic.svg
    |       |       |   |       |-- skiing.svg
    |       |       |   |       |-- skull-crossbones.svg
    |       |       |   |       |-- skull.svg
    |       |       |   |       |-- slash.svg
    |       |       |   |       |-- sleigh.svg
    |       |       |   |       |-- sliders-h.svg
    |       |       |   |       |-- smile-beam.svg
    |       |       |   |       |-- smile-wink.svg
    |       |       |   |       |-- smile.svg
    |       |       |   |       |-- smog.svg
    |       |       |   |       |-- smoking-ban.svg
    |       |       |   |       |-- smoking.svg
    |       |       |   |       |-- sms.svg
    |       |       |   |       |-- snowboarding.svg
    |       |       |   |       |-- snowflake.svg
    |       |       |   |       |-- snowman.svg
    |       |       |   |       |-- snowplow.svg
    |       |       |   |       |-- socks.svg
    |       |       |   |       |-- solar-panel.svg
    |       |       |   |       |-- sort-alpha-down.svg
    |       |       |   |       |-- sort-alpha-up.svg
    |       |       |   |       |-- sort-amount-down.svg
    |       |       |   |       |-- sort-amount-up.svg
    |       |       |   |       |-- sort-down.svg
    |       |       |   |       |-- sort-numeric-down.svg
    |       |       |   |       |-- sort-numeric-up.svg
    |       |       |   |       |-- sort-up.svg
    |       |       |   |       |-- sort.svg
    |       |       |   |       |-- spa.svg
    |       |       |   |       |-- space-shuttle.svg
    |       |       |   |       |-- spider.svg
    |       |       |   |       |-- spinner.svg
    |       |       |   |       |-- splotch.svg
    |       |       |   |       |-- spray-can.svg
    |       |       |   |       |-- square-full.svg
    |       |       |   |       |-- square-root-alt.svg
    |       |       |   |       |-- square.svg
    |       |       |   |       |-- stamp.svg
    |       |       |   |       |-- star-and-crescent.svg
    |       |       |   |       |-- star-half-alt.svg
    |       |       |   |       |-- star-half.svg
    |       |       |   |       |-- star-of-david.svg
    |       |       |   |       |-- star-of-life.svg
    |       |       |   |       |-- star.svg
    |       |       |   |       |-- step-backward.svg
    |       |       |   |       |-- step-forward.svg
    |       |       |   |       |-- stethoscope.svg
    |       |       |   |       |-- sticky-note.svg
    |       |       |   |       |-- stop-circle.svg
    |       |       |   |       |-- stop.svg
    |       |       |   |       |-- stopwatch.svg
    |       |       |   |       |-- store-alt.svg
    |       |       |   |       |-- store.svg
    |       |       |   |       |-- stream.svg
    |       |       |   |       |-- street-view.svg
    |       |       |   |       |-- strikethrough.svg
    |       |       |   |       |-- stroopwafel.svg
    |       |       |   |       |-- subscript.svg
    |       |       |   |       |-- subway.svg
    |       |       |   |       |-- suitcase-rolling.svg
    |       |       |   |       |-- suitcase.svg
    |       |       |   |       |-- sun.svg
    |       |       |   |       |-- superscript.svg
    |       |       |   |       |-- surprise.svg
    |       |       |   |       |-- swatchbook.svg
    |       |       |   |       |-- swimmer.svg
    |       |       |   |       |-- swimming-pool.svg
    |       |       |   |       |-- synagogue.svg
    |       |       |   |       |-- sync-alt.svg
    |       |       |   |       |-- sync.svg
    |       |       |   |       |-- syringe.svg
    |       |       |   |       |-- table-tennis.svg
    |       |       |   |       |-- table.svg
    |       |       |   |       |-- tablet-alt.svg
    |       |       |   |       |-- tablet.svg
    |       |       |   |       |-- tablets.svg
    |       |       |   |       |-- tachometer-alt.svg
    |       |       |   |       |-- tag.svg
    |       |       |   |       |-- tags.svg
    |       |       |   |       |-- tape.svg
    |       |       |   |       |-- tasks.svg
    |       |       |   |       |-- taxi.svg
    |       |       |   |       |-- teeth-open.svg
    |       |       |   |       |-- teeth.svg
    |       |       |   |       |-- temperature-high.svg
    |       |       |   |       |-- temperature-low.svg
    |       |       |   |       |-- tenge.svg
    |       |       |   |       |-- terminal.svg
    |       |       |   |       |-- text-height.svg
    |       |       |   |       |-- text-width.svg
    |       |       |   |       |-- th-large.svg
    |       |       |   |       |-- th-list.svg
    |       |       |   |       |-- th.svg
    |       |       |   |       |-- theater-masks.svg
    |       |       |   |       |-- thermometer-empty.svg
    |       |       |   |       |-- thermometer-full.svg
    |       |       |   |       |-- thermometer-half.svg
    |       |       |   |       |-- thermometer-quarter.svg
    |       |       |   |       |-- thermometer-three-quarters.svg
    |       |       |   |       |-- thermometer.svg
    |       |       |   |       |-- thumbs-down.svg
    |       |       |   |       |-- thumbs-up.svg
    |       |       |   |       |-- thumbtack.svg
    |       |       |   |       |-- ticket-alt.svg
    |       |       |   |       |-- times-circle.svg
    |       |       |   |       |-- times.svg
    |       |       |   |       |-- tint-slash.svg
    |       |       |   |       |-- tint.svg
    |       |       |   |       |-- tired.svg
    |       |       |   |       |-- toggle-off.svg
    |       |       |   |       |-- toggle-on.svg
    |       |       |   |       |-- toilet-paper.svg
    |       |       |   |       |-- toilet.svg
    |       |       |   |       |-- toolbox.svg
    |       |       |   |       |-- tools.svg
    |       |       |   |       |-- tooth.svg
    |       |       |   |       |-- torah.svg
    |       |       |   |       |-- torii-gate.svg
    |       |       |   |       |-- tractor.svg
    |       |       |   |       |-- trademark.svg
    |       |       |   |       |-- traffic-light.svg
    |       |       |   |       |-- train.svg
    |       |       |   |       |-- tram.svg
    |       |       |   |       |-- transgender-alt.svg
    |       |       |   |       |-- transgender.svg
    |       |       |   |       |-- trash-alt.svg
    |       |       |   |       |-- trash-restore-alt.svg
    |       |       |   |       |-- trash-restore.svg
    |       |       |   |       |-- trash.svg
    |       |       |   |       |-- tree.svg
    |       |       |   |       |-- trophy.svg
    |       |       |   |       |-- truck-loading.svg
    |       |       |   |       |-- truck-monster.svg
    |       |       |   |       |-- truck-moving.svg
    |       |       |   |       |-- truck-pickup.svg
    |       |       |   |       |-- truck.svg
    |       |       |   |       |-- tshirt.svg
    |       |       |   |       |-- tty.svg
    |       |       |   |       |-- tv.svg
    |       |       |   |       |-- umbrella-beach.svg
    |       |       |   |       |-- umbrella.svg
    |       |       |   |       |-- underline.svg
    |       |       |   |       |-- undo-alt.svg
    |       |       |   |       |-- undo.svg
    |       |       |   |       |-- universal-access.svg
    |       |       |   |       |-- university.svg
    |       |       |   |       |-- unlink.svg
    |       |       |   |       |-- unlock-alt.svg
    |       |       |   |       |-- unlock.svg
    |       |       |   |       |-- upload.svg
    |       |       |   |       |-- user-alt-slash.svg
    |       |       |   |       |-- user-alt.svg
    |       |       |   |       |-- user-astronaut.svg
    |       |       |   |       |-- user-check.svg
    |       |       |   |       |-- user-circle.svg
    |       |       |   |       |-- user-clock.svg
    |       |       |   |       |-- user-cog.svg
    |       |       |   |       |-- user-edit.svg
    |       |       |   |       |-- user-friends.svg
    |       |       |   |       |-- user-graduate.svg
    |       |       |   |       |-- user-injured.svg
    |       |       |   |       |-- user-lock.svg
    |       |       |   |       |-- user-md.svg
    |       |       |   |       |-- user-minus.svg
    |       |       |   |       |-- user-ninja.svg
    |       |       |   |       |-- user-nurse.svg
    |       |       |   |       |-- user-plus.svg
    |       |       |   |       |-- user-secret.svg
    |       |       |   |       |-- user-shield.svg
    |       |       |   |       |-- user-slash.svg
    |       |       |   |       |-- user-tag.svg
    |       |       |   |       |-- user-tie.svg
    |       |       |   |       |-- user-times.svg
    |       |       |   |       |-- user.svg
    |       |       |   |       |-- users-cog.svg
    |       |       |   |       |-- users.svg
    |       |       |   |       |-- utensil-spoon.svg
    |       |       |   |       |-- utensils.svg
    |       |       |   |       |-- vector-square.svg
    |       |       |   |       |-- venus-double.svg
    |       |       |   |       |-- venus-mars.svg
    |       |       |   |       |-- venus.svg
    |       |       |   |       |-- vial.svg
    |       |       |   |       |-- vials.svg
    |       |       |   |       |-- video-slash.svg
    |       |       |   |       |-- video.svg
    |       |       |   |       |-- vihara.svg
    |       |       |   |       |-- volleyball-ball.svg
    |       |       |   |       |-- volume-down.svg
    |       |       |   |       |-- volume-mute.svg
    |       |       |   |       |-- volume-off.svg
    |       |       |   |       |-- volume-up.svg
    |       |       |   |       |-- vote-yea.svg
    |       |       |   |       |-- vr-cardboard.svg
    |       |       |   |       |-- walking.svg
    |       |       |   |       |-- wallet.svg
    |       |       |   |       |-- warehouse.svg
    |       |       |   |       |-- water.svg
    |       |       |   |       |-- wave-square.svg
    |       |       |   |       |-- weight-hanging.svg
    |       |       |   |       |-- weight.svg
    |       |       |   |       |-- wheelchair.svg
    |       |       |   |       |-- wifi.svg
    |       |       |   |       |-- wind.svg
    |       |       |   |       |-- window-close.svg
    |       |       |   |       |-- window-maximize.svg
    |       |       |   |       |-- window-minimize.svg
    |       |       |   |       |-- window-restore.svg
    |       |       |   |       |-- wine-bottle.svg
    |       |       |   |       |-- wine-glass-alt.svg
    |       |       |   |       |-- wine-glass.svg
    |       |       |   |       |-- won-sign.svg
    |       |       |   |       |-- wrench.svg
    |       |       |   |       |-- x-ray.svg
    |       |       |   |       |-- yen-sign.svg
    |       |       |   |       |-- yin-yang.svg
    |       |       |   |-- webfonts
    |       |       |       |-- fa-brands-400.eot
    |       |       |       |-- fa-brands-400.svg
    |       |       |       |-- fa-brands-400.ttf
    |       |       |       |-- fa-brands-400.woff
    |       |       |       |-- fa-brands-400.woff2
    |       |       |       |-- fa-regular-400.eot
    |       |       |       |-- fa-regular-400.svg
    |       |       |       |-- fa-regular-400.ttf
    |       |       |       |-- fa-regular-400.woff
    |       |       |       |-- fa-regular-400.woff2
    |       |       |       |-- fa-solid-900.eot
    |       |       |       |-- fa-solid-900.svg
    |       |       |       |-- fa-solid-900.ttf
    |       |       |       |-- fa-solid-900.woff
    |       |       |       |-- fa-solid-900.woff2
    |       |       |-- jquery
    |       |       |   |-- jquery.js
    |       |       |   |-- jquery.min.js
    |       |       |   |-- jquery.min.map
    |       |       |   |-- jquery.slim.js
    |       |       |   |-- jquery.slim.min.js
    |       |       |   |-- jquery.slim.min.map
    |       |       |-- jquery-easing
    |       |           |-- jquery.easing.compatibility.js
    |       |           |-- jquery.easing.js
    |       |           |-- jquery.easing.min.js
    |       |-- elements
    |       |   |-- footer.js
    |       |   |-- header.js
    |       |   |-- sidebar.js
    |       |-- pages
    |           |-- add.js
    |           |-- edit.js
    |           |-- index.js
    |           |-- login.js
    |           |-- notfound.js
    |           |-- register.js
    |           |-- title.js
    |-- server
        |-- .env
        |-- .gitignore
        |-- package-lock.json
        |-- package.json
        |-- public
        |-- src
            |-- app.js
            |-- server.js
            |-- controller
            |   |-- meals.controller.js
            |   |-- users.controller.js
            |-- models
            |   |-- meal
            |   |   |-- model.meal.js
            |   |   |-- mongo.meal.js
            |   |-- user
            |       |-- model.user.js
            |       |-- mongo.user.js
            |-- routes
            |   |-- api.js
            |   |-- meal
            |   |   |-- meals.routes.js
            |   |-- user
            |       |-- users.routes.js
            |-- utility
                |-- auth.js
                |-- mongo.js
                |-- password.js
                |-- query.js
                |-- redis.js
