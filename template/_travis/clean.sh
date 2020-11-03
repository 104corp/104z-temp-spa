<%_ if (!options.isMKT) { _%>
if [[ ${TRAVIS_BRANCH} == 'testing' ]]; then

  aws cloudfront create-invalidation --distribution-id $dev_cdn_id --paths "<%= options.baseUrl %>/*"

elif [[ ${TRAVIS_BRANCH} == 'develop' ]]; then

  aws cloudfront create-invalidation --distribution-id $dev_cdn_id --paths "<%= options.baseUrl %>/*"

elif [[ ${TRAVIS_BRANCH} == 'master' ]]; then

  aws cloudfront create-invalidation --distribution-id $stg_cdn_id --paths "<%= options.baseUrl %>/*"

elif [[ ${TRAVIS_BRANCH} == 'production' ]]; then

  aws cloudfront create-invalidation --distribution-id $prod_cdn_id --paths "<%= options.baseUrl %>/*"

fi
<%_ } _%>
