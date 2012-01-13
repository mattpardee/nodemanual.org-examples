	example = function (param1, optParam, callback) {
    if (typeof callback === 'undefined') {
      // only two paramaters were passed, so the callback is actually in `optParam`
      callback = optParam;
      //give `optParam` a default value
      optParam = "and a default parameter";
    }
    callback(param1, optParam);
	}

	example("This is a necessary parameter", console.log);
	example("This is a necessary parameter", "and an optional parameter", console.log);