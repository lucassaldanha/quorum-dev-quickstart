#!/bin/bash -u

for i in {1..4}
do
    mv "files/besu/config/besu/validator-pki/validator$i/new/validator.crl" "files/besu/config/besu/validator-pki/validator$i/new/old_validator.crl"
    rm "files/besu/config/besu/validator-pki/validator$i/new/old_validator.crl"
    cp '/Users/lucas/Desktop/pki block creation data/validator.crl' "files/besu/config/besu/validator-pki/validator$i/new/"
done