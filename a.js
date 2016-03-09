function gerarSubject(){
    var subject={count:  0}, observers=[]

    subject.addObserver = function(obs){
        observers.push(obs)
    }

    subject.update = function(){
        this.count++
        for(var i=0;i<observers.length;i++){
            var listener = observers[i]
            listener(subject)
        }
    }
    return subject
}

var countOb = gerarSubject()
var listenerCount = (function(evento){
    console.log('Count:' + evento.count)
})

var listenerCount2= (function(evento){
    console.log('Count * 2 = ' + evento.count*2)
})

countOb.addObserver(listenerCount)
countOb.addObserver(listenerCount2)

countOb.update()
countOb.update()
countOb.update()
