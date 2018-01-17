# Instagram: Galeria de Fotos

Mostre uma lista das últimas fotos do Instagram ao seu site. Não há necessidade de jQuery.

## Veja ao vivo

**[demo](http://cristianefaria.com/demo/instagram-galeria/)**

## Como funciona

Gere sua chave no **[instagram](https://www.instagram.com/developer/)**

Alguns requisitos para funcionar corretamente:

Instafeed 1.3.3

Acesse o site dos desenvolvedores ou utilize as bibliotecas do demo.

Neste exemplo usaremos o plugin javascript **[instafeed](http://instafeedjs.com/)** 

## Uso


### Uso básico

Após o download, alinhe o **id** e a **classe** da sua div conforme o arquivo **index.html** do modelo.

### Uso Avançado

Edite o arquivo **instafeed.js** incluído com o modelo.


Você pode escrever sua própria marcação HTML e será usada para cada imagem que Instafeed.js obtenha
```javascript
template: '<div><img src="{{image}}" title="{{caption}}"/></div>',
```

Defina a resolução padrão das fotos
```javascript
 resolution: 'low_resolution',
 ```

As opções disponíveis são:
*thumbnail (padrão) - 150x150
*low_resolution - 306x306
*standard_resolution - 612x612

Instafeed.js oferece vários modelos de personalização
**[veja mais na documentação](http://instafeedjs.com/)**


## Copyright and License

Copyright 2018 Cristiane Faria. Code released under the [MIT](https://github.com/cristiianefaria/instagram-galeria/blob/master/LICENSE) license.