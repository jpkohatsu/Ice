import React, { Component } from 'react';
import _ from 'lodash';
import {connect}from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPostUserSuspension} from '../actions';
import {fetchPostUserBan} from '../actions';