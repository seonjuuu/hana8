#!/bin/bash

#echo $#
if [ $# -neq 1]; then
  echo 'usage>gac "commit message"'
  exit
fi;

MES=$1

git add -A

git commit -m $MSG

git push
