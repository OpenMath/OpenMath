
<xsl:stylesheet 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:om="http://www.openmath.org/OpenMath"
  xmlns="http://www.w3.org/1998/Math/MathML"
  version="1.0"
>




<xsl:template match="om:OMS[@cd='integer1' and @name='factorial']" >
<xsl:apply-templates select="following-sibling::*">
<xsl:with-param name="p" select="5"/>
</xsl:apply-templates>
<mo>!</mo>
</xsl:template>



</xsl:stylesheet>



