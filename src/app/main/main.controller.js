'use strict';

angular.module('ohh')
  .controller('MainCtrl', function ($scope,$http) {
    $scope.loading = true;
    $scope.date = new Date();
    $scope.upVote = function() {
      $scope.vote++;
    }
    $scope.downVote = function() {
      $scope.vote--;
    }
    $scope.vote = 0;
    var blu = {
      method: 'Get',
      url: "https://api.foursquare.com/v2/venues/50f4966fe4b0802973f608f9?oauth_token=LJX30GV2ZVXLQ2LKUSTHVXRTBLQQKPPRFKSMABJIZMJ0QP0S&v=20150805"
    }
    $http(blu)
      .success(function(response) {
        $scope.name = response.response.venue.name;
        $scope.location = response.response.venue.location.address;
        $scope.phone = response.response.venue.contact.formattedPhone;
        $scope.rating = response.response.venue.rating;
        $scope.visits = response.response.venue.stats.visitsCount;
        $scope.rating = response.response.venue.rating;
        $scope.hasmenu = response.response.venue.hasMenu;
        $scope.hour = response.response.venue.hours.status;
        $scope.status = response.response.venue.hours.isOpen;
        $scope.items = response.response.venue.tips.groups[1].items;
        $scope.prefix = response.response.venue.bestPhoto.prefix;
        $scope.suffix = response.response.venue.bestPhoto.suffix;
        $scope.width = response.response.venue.bestPhoto.width;
        $scope.height = response.response.venue.bestPhoto.height;
        $scope.bestPhoto = $scope.prefix +'300x300'+ $scope.suffix;
        $scope.menu = response.response.venue.menu.url;

      })
      .catch(function() {
        //log error somehow
      })
      .finally(function() {
        $scope.loading = false;
      })
  });
