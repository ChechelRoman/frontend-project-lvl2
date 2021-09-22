### Hexlet tests and linter status:
[![Actions Status](https://github.com/ChechelRoman/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/ChechelRoman/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/1511f7e9f72bf0f446d0/maintainability)](https://codeclimate.com/github/ChechelRoman/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/1511f7e9f72bf0f446d0/test_coverage)](https://codeclimate.com/github/ChechelRoman/frontend-project-lvl2/test_coverage)
[![EsLint](https://github.com/ChechelRoman/frontend-project-lvl2/actions/workflows/EsLint_Check.yml/badge.svg)](https://github.com/ChechelRoman/frontend-project-lvl2/actions)

### About

This package contains a cli utility that generates difference between two files (JSON, YAML, YML)

### Setup

```
$ make install
```

### Run tests

```
$ make test
```

### JSON gendiff showcase

```
$ gendiff filePath1.json filePath2.json
```

[![asciicast](https://asciinema.org/a/wawnTT44dBPxdc5IxnGgaK6RB.svg)](https://asciinema.org/a/wawnTT44dBPxdc5IxnGgaK6RB)

### YAML/YML gendiff showcase

```
$ gendiff filePath1.ymal filePath2.yml
```

[![asciicast](https://asciinema.org/a/UeK45VxjVzxR6vxNjgEg9jcNV.svg)](https://asciinema.org/a/UeK45VxjVzxR6vxNjgEg9jcNV)

### Stylish format gendiff showcase

```
$ gendiff filePath1.json filePath2.json
```

[![asciicast](https://asciinema.org/a/415016.svg)](https://asciinema.org/a/415016)

### Plain format gendiff showcase

```
$ gendiff --format plain filePath1.json filePath2.json
```

[![asciicast](https://asciinema.org/a/415238.svg)](https://asciinema.org/a/415238)

### JSON format gendiff showcase

```
$ gendiff -f filePath1.json filePath2.json
```

[![asciicast](https://asciinema.org/a/415239.svg)](https://asciinema.org/a/415239)
