import angular from 'angular';
import myController from './controllers/myController';

const app = angular.module('app', []);
app.controller('myController', myController);
