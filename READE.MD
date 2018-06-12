### STARTER KIT DEVELOPMENT

This is my starter kit to develop app in nodejs


## mock api
  --json-faker-schema -- declare our schema
  --faker      -- generate data
  --json-server -- mock http

# PRODUCTION

  -- minification
        -- fast loading
        -- save bandwidth

  ## BUNDLE SPLITING

    -- webpack take the job
            -- output change it to {} and add name of each bundle
                    -- output :{main,vendor,etc...}
                    -- plugins usto put this chunk(bundle)


  ## CACHE BUST
      --save bandwidth
      --force change update

      --to save bandwidth and save client from send httpHeadeers extra
          --set far-future-header to not expire till specific date
          --to send chnge to clients we use webpack-md5-hash and change output.filename:[name],[chunkhash].js

  ## Error logging
      -- descriptive metadata
      --trackjs,new releic , etc....


## DEPLOYMENT
  -- UI
      -- github , surge
  -- API
      -- cloudhosting
