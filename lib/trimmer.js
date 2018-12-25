/*!
 * lunr.trimmer
 * Copyright (C) @YEAR Oliver Nightingale
 */

/**
 * lunr.trimmer is a pipeline function for trimming non word
 * characters from the beginning and end of tokens before they
 * enter the index.
 *
 * This implementation may not work correctly for non latin
 * characters and should either be removed or adapted for use
 * with languages with non-latin characters.
 *
 * @static
 * @implements {lunr.PipelineFunction}
 * @param {lunr.Token} token The token to pass through the filter
 * @returns {lunr.Token}
 * @see lunr.Pipeline
 */
lunr.trimmer = function (token) {
  return token.update(function (s) {
    const nonAlphaNumericUnderscoreCyrillic = "[^\\wа-яА-ЯёЁ]"
    return s.replace(new RegExp("^" + nonAlphaNumericUnderscoreCyrillic + "+"), '')
            .replace(new RegExp(nonAlphaNumericUnderscoreCyrillic + "+$"), '')
  })
}

lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer')
