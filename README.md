# es6-proxy-benchmarks

## Run

```shell
git clone git@github.com:herrmannplatz/es6-proxy-benchmarks.git
cd es6-proxy-benchmarks
npm install
npm start
```

## Results

```shell
plain x 466,893,331 ops/sec ±1.35% (83 runs sampled)
proxy x 3,095,962 ops/sec ±0.65% (90 runs sampled)
wrapped x 461,034,679 ops/sec ±1.70% (88 runs sampled)
Fastest is plain,wrapped
```