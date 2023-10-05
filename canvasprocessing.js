onmessage = (evt) => {
    const canvas = evt.data.canvas
    const _ctx = canvas.getContext("2d",{willreadfrequently: true})
    let _decodedTxid;
    
    let _combined = '';
    let _converted = 2.18; // Initial value
    let _endAngle = -2.18;
    for (let i = 0; i < 11; i++) {
    
      const x = _width / 2;
      const y = _height / 2;
      let _radius = Math.round((_width / 2.5) - (i * 18));
      let _startAngle = _endAngle;
      _endAngle = _startAngle + Math.round((_converted / (i + 1)) * Math.PI);

      if (_endAngle <= _startAngle) {
        _endAngle = Math.round(_startAngle - 10);
      }

      

      let _midAngle = _startAngle+(_endAngle-_startAngle)/2
      let _midx = Math.round(x + Math.cos(_midAngle) * (_radius + 10));
      let _midy = Math.round(y + Math.sin(_midAngle) * (_radius + 10));

      let _pixel = _ctx.getImageData(_midx, _midy, 1, 1).data;
      
    let _hex;  
      if( i == 10) {        

        var temp = ("000000" + rgbToHex(_pixel[0], _pixel[1], _pixel[2])).slice(-6);
        _hex =  temp.substring(2,6) 
    } 
    else {
        
        _hex = ("000000" + rgbToHex(_pixel[0], _pixel[1], _pixel[2])).slice(-6);

    }
    console.log(_startAngle,_endAngle,_radius,_midx,_midy,_hex)
      _combined += _hex;

      if (isNaN(_hex.substring(5))) {
        _converted = _hex.substring(5).charCodeAt(0) - 96;
      } else {
        _converted = parseInt(_hex.substring(5), 10);
      }
      
    }

    _decodedTxid = _combined;
    console.log(_decodedTxid)
    // getContent(_decodedTxid)

}